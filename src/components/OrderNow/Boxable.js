import React from 'react';
import DragDropWrapper from './DragDropWrapper';

/*
    Boxable -- a thing you can drag into a Box
*/

export default class Boxable extends React.Component {
    render() {
      return (
        <div className="boxable_component" style={{display: 'inline-block'}}>
          <DragDropWrapper
            targetKey={this.props.targetKey}
            dragData={{label: this.props.label}}
            customDragElement={this.props.customDragElement}
            onDragStart={()=>(console.log('start'))}
            onDrag={()=>(console.log('dragging'))}
            onDragEnd={()=>(console.log('end'))}
            onDrop={(e)=>(console.log(e))}
    
          >
            <img src={this.props.image} height="45" style={{ marginLeft: 40}}/>
          </DragDropWrapper>
        </div>
      );
    }
  }