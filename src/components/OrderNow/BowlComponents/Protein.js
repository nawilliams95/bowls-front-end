import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {
    return (
        <>
            <h2 className="subtitle is-5">Choose 1-2 Protines:</h2>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Salmon" image="https://i.ibb.co/zGVf5xN/Salmon.jpg" />
                <h6 style={{ textAlign: 'center' }}>Salmon</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Chicken" image="https://i.ibb.co/VMmFvGD/Chicken.jpg" />
                <h6 style={{ textAlign: 'center' }}>Chicken</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Steak" image="https://i.ibb.co/NCc7nrv/Steak.jpg" />
                <h6 style={{ textAlign: 'center' }}>Steak</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Tofu" image="https://i.ibb.co/xJhBymR/Tofu.jpg" />
                <h6 style={{ textAlign: 'center' }}>Tofu</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="No Protein" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
                <h6 style={{ textAlign: 'center' }}>No Protein</h6>
            </div>
        </>
    )
}