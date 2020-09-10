import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {
    return (
        <>
            <h2 className="subtitle is-5">Choose your Toppings:</h2>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Bacon Bits" image="https://i.ibb.co/8rgsRGv/Bacon-Bits.jpg" />
                <h6 style={{ textAlign: 'center' }}>Bacon Bits</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Bread Crumbs" image="https://i.ibb.co/QpwXX9D/Breadcrumbs.jpg" />
                <h6 style={{ textAlign: 'center' }}>Bread Crumbs</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Red Pepper Flakes" image="https://i.ibb.co/qsKCqZ8/Pepper-Flakes.jpg" />
                <h6 style={{ textAlign: 'center' }}>Red Pepper Flakes</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Crispy Parm" image="https://i.ibb.co/kSrYGP2/Crispy-Parm.jpg" />
                <h6 style={{ textAlign: 'center' }}>Crispy Parm</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="No Toppings" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
                <h6 style={{ textAlign: 'center' }}>No Toppings</h6>
            </div>
        </>
    )
}