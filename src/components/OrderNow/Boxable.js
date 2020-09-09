import React from 'react';
import DragDropWrapper from './DragDropWrapper';

/*
    Boxable -- a thing you can drag into a Box
*/

export default function Boxable(props) {

    return (
        <div className="boxable_component" style={{ display: 'inline-block' }}>
            <DragDropWrapper
                targetKey={props.targetKey}
                dragData={{ label: props.label }}
                customDragElement={props.customDragElement}
                onDragStart={() => (console.log('start'))}
                onDrag={() => (console.log('dragging'))}
                onDragEnd={() => (console.log('end'))}
                onDrop={(e) => (console.log(e))}

            >
                <img src={props.image} height="45" style={{ marginLeft: 40 }} />
            </DragDropWrapper>
        </div>
    );

}