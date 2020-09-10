import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {

    return (
        <>
            <h2 className="subtitle is-5">Choose a Base:</h2>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Rice" image="https://i.ibb.co/PZHL2mK/Rice.jpg" />
                <h6 style={{ textAlign: 'center' }}>Rice</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Greens" image="https://i.ibb.co/3cRM912/Greens.jpg" />
                <h6 style={{ textAlign: 'center' }}>Greens</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="No Base" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
                <h6 style={{ textAlign: 'center' }}>No Base</h6>
            </div>
        </>
    )
}