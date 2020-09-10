import React from 'react';
import Boxable from '../Boxable';

export default function Sides(props) {
    return (
        <>
            <h2 className="subtitle is-5">Choose your Sides:</h2>
            <Boxable targetKey="box" label="Sweet Potato" image="https://i.ibb.co/rbCK5Bc/Swt-Potato.jpg"/>
            <Boxable targetKey="box" label="Red Cabbage" image="https://i.ibb.co/gy3YQfg/Red-Cabbage.jpg"/>
            <Boxable targetKey="box" label="Corn" image="https://i.ibb.co/pQy08Kk/Corn.jpg"/>
            <Boxable targetKey="box" label="Beats" image="https://i.ibb.co/dDrbqYw/Beets.jpg"/>
            <Boxable targetKey="box" label="Broccoli" image="https://i.ibb.co/frQQKQ1/Broccoli.jpg"/>
            <Boxable targetKey="box" label="Avacado" image="https://i.ibb.co/Qd0n4Yn/Avocado.jpg"/>
            <Boxable targetKey="box" label="No sides" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
        </>
    )
}