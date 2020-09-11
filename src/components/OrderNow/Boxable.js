import React from 'react';
import DragDropWrapper from './DragDropWrapper';

/*
    Boxable -- a thing you can drag into a Box
*/

export default class Boxable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      protein: [],
      sides: [],
      toppings: [],
      sauce: []
    };
  }
  render() {

    return (
      <div className="boxable_component" style={{ display: 'inline-block' }}>
        <DragDropWrapper
          targetKey={this.props.targetKey}
          dragData={{ label: this.props.label }}
          customDragElement={this.props.customDragElement}
          onDragStart={() => (console.log('start'))}
          onDrag={() => (console.log('dragging'))}
          onDragEnd={() => (console.log('end'))}
          onDrop={(e) => {
            return (
                this.setState({ sides: [this.props.label] })
            )
        }} 

        >
          <img src={this.props.image} height="45" alt="" style={{ marginLeft: 40 }} />
        </DragDropWrapper>
      </div>
    );
  }
}