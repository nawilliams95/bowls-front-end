
import React from 'react';
import DragDropBox from './DragDropBox';
import './CreateBowl.css';
import Base from './BowlComponents/Bases';
import Protein from './BowlComponents/Protein';
import Sides from './BowlComponents/Sides';
import Toppings from './BowlComponents/Toppings';

export default function CreateBowl(props) {

    return (
        <div className="drag_things_to_boxes">
            <h1>Create Bowl</h1>
            <p>Drag ingrdients for you bowl to the "Your Bowl" box. </p>
            <div className="things_to_drag">
                <Base />
                <Protein />
                <Sides />
                <Toppings />
            </div>
            <div className="boxes">
                <h3>Your Bowl</h3>
                <DragDropBox targetKey="box" />
            </div>
            <div style={{ clear: 'both' }}>&nbsp;</div>

        </div>
    )

}