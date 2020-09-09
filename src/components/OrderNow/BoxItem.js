import React from 'react';
import DragDropWrapper from './DragDropWrapper';
import DropTarget from './DropTarget';
import './BoxItem.css';

/*
    BoxItem - a thing that appears in a box, after you drag something into the box
*/

export default function BoxItem(props) {


    handleDrop = (e) => {
        e.stopPropagation();
        props.swap(e.dragData.index, props.index, e.dragData);
        e.containerElem.style.visibility = "hidden";
    };

    deleteMe = () => {
        props.kill(props.uid);
    };


    /*
      Notice how these are wrapped in a DragDropWrapper (so you can drag them) AND
      in a DropTarget (enabling you to rearrange items in the box by dragging them on
      top of each other)
    */

    return (
        <div className="box_item_component">
            <DragDropWrapper
                targetKey="boxItem"
                dragData={{ label: props.children, index: props.index }}
                onDrop={deleteMe}
                disappearDraggedElement={true}
                dragHandleClassName="grabber"
            >
                <DropTarget
                    onHit={handleDrop}
                    targetKey="boxItem"
                >
                    <div className="outer">
                        <div className="item">
                            <span className="grabber">&#8759;</span>
                            {props.children}
                        </div>
                    </div>
                </DropTarget>
            </DragDropWrapper>
        </div>
    );

}