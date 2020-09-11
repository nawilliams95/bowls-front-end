import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {

    return (
        <>
            <h2 className="notification">Choose a Base:</h2>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Rice" image="https://i.ibb.co/PZHL2mK/Rice.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '30px' }}>Rice</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Greens" image="https://i.ibb.co/3cRM912/Greens.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '40px' }}>Greens</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="No Base" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '40px' }}>No Base</h6>
            </div>
        </>
    )
}