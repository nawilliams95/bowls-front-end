import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {
    return (
        <>
            <h2>Choose your Toppings:</h2>
            <Boxable targetKey="box" label="Bacon Bits" image="https://i.ibb.co/8rgsRGv/Bacon-Bits.jpg"/>
            <Boxable targetKey="box" label="Bread Crumbs" image="https://i.ibb.co/QpwXX9D/Breadcrumbs.jpg"/>
            <Boxable targetKey="box" label="Red Pepper Flakes" image="https://i.ibb.co/qsKCqZ8/Pepper-Flakes.jpg"/>
            <Boxable targetKey="box" label="Crispy Parm" image="https://i.ibb.co/kSrYGP2/Crispy-Parm.jpg"/>
            <Boxable targetKey="box" label="No Toppings" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
        </>
    )
}