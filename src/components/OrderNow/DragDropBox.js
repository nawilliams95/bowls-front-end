import { React, useState, useEffect } from 'react';
import shortid from 'shortid';
import DropTarget from './DropTarget';
// import BoxItem from './BoxItem';

export default function DragDropBox(props) {

    const [items, updateItems] = useState([]);

    handleDrop = (e) => {
        items = items.slice();
        items.push({ label: e.dragData.label, uid: shortid.generate() });
        updateItems(items);
        e.containerElem.style.visibility = "hidden";
    };

    swap = (fromIndex, toIndex, dragData) => {
        items = items.slice();
        const item = { label: dragData.label, uid: shortid.generate() };
        items.splice(toIndex, 0, item);
        updateItems(items);
    };

    kill = (uid) => {
        items = items.slice();
        const index = items.findIndex((item) => {
            return item.uid == uid
        });
        if (index !== -1) {
            items.splice(index, 1);
        }
        updateItems(items);
    };


    /*
        Note the two layers of DropTarget. 
        This enables it to handle dropped items from 
        outside AND items dragged between boxes.
    */
    return (
        <div className="component_box">
            <DropTarget
                onHit={handleDrop}
                targetKey={props.targetKey}
                dropData={{ name: props.name }}
            >
                <DropTarget
                    onHit={handleDrop}
                    targetKey="boxItem"
                    dropData={{ name: props.name }}
                >
                    <div className="box">
                        {state.items.map((item, index) => {
                            return (
                                <BoxItem key={item.uid} uid={item.uid} kill={kill} index={index} swap={swap}>
                                    {item.label}
                                </BoxItem>
                            )
                        })}
                    </div>
                </DropTarget>
            </DropTarget>
        </div>
    );

}