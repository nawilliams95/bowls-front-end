
import React from 'react';
import DragDropBox from './DragDropBox';
import './CreateBowl.css';
import Base from './BowlComponents/Bases';
import Protein from './BowlComponents/Protein';
import Sides from './BowlComponents/Sides';
import Toppings from './BowlComponents/Toppings';
import Sauces from './BowlComponents/Sauces';

export default function CreateBowl(props) {

    
    return (
        <div className="drag_things_to_boxes">
            <h1 className="title is-1">Create Bowl</h1>
            <p className="subtitle is-3">Drag ingrdients for the bowl to the "Your Bowl" box. </p>
            <div className="columns">
                <div className="things_to_drag column is-two-thirds">
                    <Base />
                    <Protein />
                    <Sides />
                    <Toppings />
                    <Sauces />
                </div>
                <div className="boxes column is-one-third">
                    <h3 className="title is-3">Your Bowl</h3>
                    <DragDropBox targetKey="box" />
                </div>
            </div>
            <div style={{ clear: 'both' }}>&nbsp;</div>

        </div>
    )

}