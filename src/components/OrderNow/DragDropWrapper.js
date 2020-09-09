import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function usesLeftButton(e) {
    const button = e.buttons || e.which || e.button;
    return button === 1;
}

function getFixedOffset() {
    // When browser window is zoomed, IOS browsers will offset "location:fixed" component coordinates
    // from the actual window coordinates
    let fixedElem = document.createElement('div');
    fixedElem.style.cssText = 'position:fixed; top: 0; left: 0';
    document.body.appendChild(fixedElem);
    const rect = fixedElem.getBoundingClientRect();
    document.body.removeChild(fixedElem);
    return [rect.left, rect.top]
}

function isZoomed() {
    // somewhat arbitrary figure to decide whether we need to use getFixedOffset (above) or not
    return Math.abs(1 - (document.body.clientWidth / window.innerWidth)) > 0.02;
}

export default function DragDropWrapper(props) {

    const [leftOffset, setLeftOffset] = useState(0);
    const [topOffset, setTopOffset] = useState(0);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [clicked, updateClicked] = useState(false);
    const [dragging, updateDragging] = useState(false);

    const state = [
        leftOffset,
        topOffset,
        left,
        top,
        clicked,
        dragging
    ]

    // The DOM elem we're dragging, and the elements we're dragging over.
    let dragElem = null;
    let containerElem = null;
    let sourceElem = null;
    let currentTarget = null;
    let prevTarget = null;

    let _isMounted = true;

    // offset factors that occur when dragging in a zoomed-in IOS browser
    let fixedOffsetLeft = 0;
    let fixedOffsetTop = 0;

    // scrolling at edge of window
    let scrollTimer = null;
    let xScroll = 0;
    let yScroll = 0;


    useEffect(() => {
        // set draggable attribute 'false' on any images, to prevent conflicts w browser native dragging
        const imgs = containerElem.getElementsByTagName('IMG');
        for (let i = 0; i < imgs.length; i += 1) {
            imgs[i].setAttribute('draggable', 'false');
        }

        // capture events
        if (props.dragHandleClassName) {
            // if drag handles
            const elems = containerElem.getElementsByClassName(props.dragHandleClassName);
            for (let i = 0; i < elems.length; i += 1) {
                addListeners(elems[i]);
                elems[i].style.cursor = 'move';
            }
        } else {
            // ... or not
            addListeners(containerElem);
            containerElem.style.cursor = 'move';
        }
    }, []);

    useEffect(() => {
        console.log('component mounted')
        return () => {
            _isMounted = false;
        }
    }, []);

    addListeners = (elem) => {
        elem.addEventListener('mousedown', (e) => { handleMouseDown(e); }, false);
        elem.addEventListener('touchstart', (e) => { handleTouchStart(e); }, false);
        // must add touchmove listener here in order for preventDefault() to work, to prevent scrolling during drag..
        elem.addEventListener('touchmove', handleTouchMove, { passive: false });
        elem.addEventListener('touchend', handleTouchEnd);
    };

    buildCustomEvent = (eventName, extraData = {}) => {
        let e;
        if (typeof window.CustomEvent !== 'function') {
            // we are in IE 11 and must use old-style method of creating event
            e = document.createEvent('CustomEvent');
            e.initCustomEvent(eventName, true, true, {});
        } else {
            e = new CustomEvent(eventName, { bubbles: true, cancelable: true });
        }
        // Add useful data to the event
        Object.assign(e, {
            dragData: props.dragData,
            dragElem: dragElem,
            containerElem: containerElem,
            sourceElem: sourceElem,
        }, extraData);
        return e;
    };

    setCurrentTarget = (x, y) => {
        // drop the z-index to get this elem out of the way, figure out what we're dragging over, then reset the z index
        dragElem.style.zIndex = -1;
        const target = document.elementFromPoint(x, y) || document.body;
        dragElem.style.zIndex = props.zIndex;
        // prevent it from selecting itself as the target
        currentTarget = dragElem.contains(target) ? document.body : target;
    };

    setFixedOffset = () => {
        if (isZoomed()) {
            [fixedOffsetLeft, fixedOffsetTop] = getFixedOffset();
        }
    };

    doScroll = () => {
        window.scrollBy(xScroll, yScroll)
        setFixedOffset();
    };

    startScrolling = (x, y) => {
        [xScroll, yScroll] = [x, y];
        if (!scrollTimer) {
            scrollTimer = setInterval(doScroll, 50);
        }
    };

    stopScrolling = () => {
        clearInterval(scrollTimer);
        scrollTimer = null;
    };

    generateEnterLeaveEvents = (x, y) => {
        // generate events as we enter and leave elements while dragging
        const prefix = props.targetKey;
        setCurrentTarget(x, y);
        if (currentTarget !== prevTarget) {
            if (prevTarget) { prevTarget.dispatchEvent(buildCustomEvent(`${prefix}DragLeave`)); }
            if (currentTarget) { currentTarget.dispatchEvent(buildCustomEvent(`${prefix}DragEnter`)); }
        }
        prevTarget = currentTarget;
    };

    generateDropEvent = (x, y) => {
        // generate a drop event in whatever we're currently dragging over
        setCurrentTarget(x, y);
        const customEvent = buildCustomEvent(`${props.targetKey}Drop`, { x, y });
        currentTarget.dispatchEvent(customEvent);
    };

    // Start the Drag
    handleMouseDown = (e) => {
        if (usesLeftButton(e) && !props.noDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            startDrag(e.clientX, e.clientY);
        }
    };

    handleTouchStart = (e) => {
        if (!props.noDragging) {
            e.stopPropagation();
            setFixedOffset();
            startDrag(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        }
    };

    startDrag = (clickX, clickY) => {
        document.addEventListener(`${props.targetKey}Dropped`, props.onDrop);
        const rect = containerElem.getBoundingClientRect();
        updateClicked(true);
        setLeftOffset(rect.left - clickX);
        setTopOffset(rect.top - clickY);
        setLeft(rect.left);
        setTop(rect.top);

        props.onDragStart(props.dragData);
    };

    // During Drag
    handleMouseMove = (e) => {
        if (!props.noDragging) {
            e.preventDefault();
            if (clicked) {
                drag(e.clientX, e.clientY);
                window.getSelection().removeAllRanges(); // prevent firefox native-drag issue when image is highlighted
            }
        }
    };

    handleTouchMove = (e) => {
        if (!props.noDragging) {
            e.preventDefault();  // prevents window scrolling
            if (clicked) {
                drag(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            }
        }
    };

    getOffscreenCoordinates = (x, y) => {
        // are we offscreen (or very close, anyway)? if so by how much?
        const LEFTEDGE = 10
        const RIGHTEDGE = window.innerWidth - 10
        const TOPEDGE = 10
        const BOTTOMEDGE = window.innerHeight - 10
        const xOff = x < LEFTEDGE ? x - LEFTEDGE : x > RIGHTEDGE ? x - RIGHTEDGE : 0;
        const yOff = y < TOPEDGE ? y - TOPEDGE : y > BOTTOMEDGE ? y - BOTTOMEDGE : 0;
        return yOff || xOff ? [xOff, yOff] : false;
    };

    drag = (x, y) => {
        generateEnterLeaveEvents(x, y);
        const [stateChanges, setStateChanges] = useState({ dragging: true });
        const offScreen = getOffscreenCoordinates(x, y);
        if (offScreen) {
            startScrolling(...offScreen)
        } else {
            stopScrolling();
            if (!props.yOnly) { stateChanges.left = (leftOffset + x) - fixedOffsetLeft; }
            if (!props.xOnly) { stateChanges.top = (topOffset + y) - fixedOffsetTop; }
        }
        setStateChanges(stateChanges);
        props.onDrag(props.dragData, currentTarget, x, y);
    };

    // Drop
    handleMouseUp = (e) => {
        updateClicked(false);
        if (state.dragging) {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            drop(e.clientX, e.clientY);
            window.getSelection().removeAllRanges(); // prevent weird-looking highlights
        }
    };

    handleTouchEnd = (e) => {
        updateClicked(false);
        if (dragging) {
            drop(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        }
    };

    drop = (x, y) => {
        stopScrolling();
        generateDropEvent(x, y);
        document.removeEventListener(`${props.targetKey}Dropped`, props.onDrop);
        _isMounted && updateDragging(false);
        props.onDragEnd(props.dragData, currentTarget, x, y);
    };

    getDisplayMode = () => {
        if (dragging && !props.dragClone && !props.customDragElement) {
            if (props.disappearDraggedElement) {
                return 'disappeared'
            }
            return 'hidden'
        }
        return 'normal'
    };


    const content = props.render ? props.render(state) : props.children;
    const displayMode = getDisplayMode();

    // dragging will be applied to the "ghost" element
    let ghostContent;
    if (props.customDragElement) {
        ghostContent = props.customDragElement;
    } else {
        ghostContent = content;   // dragging a clone
    }

    const ghostStyles = {
        position: 'fixed',
        cursor: 'move',
        left: left,
        top: top,
        zIndex: props.zIndex,
        opacity: props.dragElemOpacity,
        display: dragging ? 'block' : 'none',
    };

    const ghost = (
        <div className="ddcontainerghost" style={ghostStyles} ref={(c) => { dragElem = c; }}>
            {ghostContent}
        </div>
    );

    const containerStyles = {
        position: displayMode === 'disappeared' ? 'absolute' : 'relative',
        display: 'inline-block',
    };

    const sourceElemStyles = {
        display: displayMode === 'disappeared' ? 'none' : 'inherit',
        visibility: displayMode === 'hidden' ? 'hidden' : 'inherit',
    };

    return (
        <div className="ddcontainer" style={containerStyles} ref={(c) => { containerElem = c; }}>
            <span className="ddcontainersource" style={sourceElemStyles} ref={(c) => { sourceElem = c; }}>
                {content}
            </span>
            {ghost}
        </div>
    );

}

DragDropWrapper.propTypes = {
    children: PropTypes.node,

    // Determines what you can drop on
    targetKey: PropTypes.string,

    // If provided, we'll drag this instead of the actual object. Takes priority over dragClone if both are set
    customDragElement: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    // Makes the dragged element completely disappear while dragging so that it takes up no space
    disappearDraggedElement: PropTypes.bool,

    // If true, then we will drag a clone of the object instead of the object itself. See also customDragElement
    dragClone: PropTypes.bool,

    // ghost will display with this opacity
    dragElemOpacity: PropTypes.number,

    // We will pass this data to the target when you drag or drop over it
    dragData: PropTypes.object,

    // If included, we'll only let you drag by grabbing elements with this className
    dragHandleClassName: PropTypes.string,

    // if True, then dragging is turned off
    noDragging: PropTypes.bool,

    // callbacks (optional):
    onDrop: PropTypes.func,
    onDrag: PropTypes.func,
    onDragEnd: PropTypes.func,
    onDragStart: PropTypes.func,

    // Enable a render prop
    render: PropTypes.func,

    // Constrain dragging to the x or y directions only
    xOnly: PropTypes.bool,
    yOnly: PropTypes.bool,

    // Defaults to 1000 while dragging, but you can customize it if you need it to go higher
    zIndex: PropTypes.number,
};

DragDropWrapper.defaultProps = {
    targetKey: 'ddc',
    children: null,
    customDragElement: null,
    disappearDraggedElement: false,
    dragClone: false,
    dragElemOpacity: 0.9,
    dragData: {},
    dragHandleClassName: '',
    onDragStart: () => { },
    onDrag: () => { },
    onDragEnd: () => { },
    onDrop: () => { },
    noDragging: false,
    render: null,
    xOnly: false,
    yOnly: false,
    zIndex: 1000,
};
