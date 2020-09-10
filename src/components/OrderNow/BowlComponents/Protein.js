import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {
    return (
        <>
            <h2>Choose 1-2 Protines:</h2>
            <Boxable targetKey="box" label="Salmon" image="https://i.ibb.co/zGVf5xN/Salmon.jpg"/>
            <Boxable targetKey="box" label="Chicken" image="https://i.ibb.co/VMmFvGD/Chicken.jpg"/>
            <Boxable targetKey="box" label="Steak" image="https://i.ibb.co/NCc7nrv/Steak.jpg"/>
            <Boxable targetKey="box" label="Tofu" image="https://i.ibb.co/xJhBymR/Tofu.jpg"/>
            <Boxable targetKey="box" label="No Protein" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
        </>
    )
}