import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {
    return (
        <>
            <h2>Choose a Base:</h2>
            <Boxable targetKey="box" label="Rice" image="https://i.ibb.co/PZHL2mK/Rice.jpg" />
            <Boxable targetKey="box" label="Greens" image="https://i.ibb.co/3cRM912/Greens.jpg" />
            <Boxable targetKey="box" label="No Base" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
        </>
    )
}