import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export default function DropTarget(props) {

    const [elem, updateElem] = useState(null);
    const [highlighted, setHighlighted] = useState(false);


    useEffect(() => {
        elem.addEventListener(`${props.targetKey}DragEnter`, handleDragEnter, false);
        elem.addEventListener(`${props.targetKey}DragLeave`, handleDragLeave, false);
        elem.addEventListener(`${props.targetKey}Drop`, handleDrop, false);
    }, [])

    createEvent = (eventName, eventData) => {
        // utility to create an event
        let e;
        if (typeof window.CustomEvent !== 'function') {
            // we are in IE 11 and must use old-style method of creating event
            e = document.createEvent('CustomEvent');
            e.initCustomEvent(eventName, true, true, {});
        } else {
            e = new CustomEvent(eventName, { bubbles: true, cancelable: true });
        }
        Object.assign(e, eventData);
        return e;
    }

    handleDrop = (e) => {
        // tell the drop source about the drop, then do the callback
        const evt = createEvent(
            `${props.targetKey}Dropped`,
            {
                dragData: e.dragData,
                dropElem: elem,
                dropData: props.dropData,
            },
        );
        e.containerElem.dispatchEvent(evt);
        props.onHit(e);
        highlighted;
    }

    handleDragEnter = (e) => {
        const _e = e;
        props.highlightClassName && setHighlighted(true);
        props.onDragEnter(_e);
    }

    handleDragLeave = (e) => {
        const _e = e;
        props.highlightClassName && highlighted;
        props.onDragLeave(_e);
    }



    const classNames = 'droptarget ' + (state.highlighted ? props.highlightClassName : '');
    return (
        <span ref={(t) => { elem = t; }} className={classNames}>
            {props.render ? props.render() : props.children}
        </span>
    );

}

DropTarget.propTypes = {
    children: PropTypes.node,
    render: PropTypes.func,
    highlightClassName: PropTypes.string,

    // needs to match the targetKey in the DragDropContainer -- matched via the enter/leave/drop event names, above
    targetKey: PropTypes.string,

    // data that gets sent back to the DragDropContainer and shows up in its onDrop() callback event
    dropData: PropTypes.object,

    // callbacks
    onDragEnter: PropTypes.func,
    onDragLeave: PropTypes.func,
    onHit: PropTypes.func,
};

DropTarget.defaultProps = {
    children: null,
    targetKey: 'ddc',
    onDragEnter: () => { },
    onDragLeave: () => { },
    onHit: () => () => { },
    dropData: {},
    highlightClassName: 'highlighted',
    render: null,
};
