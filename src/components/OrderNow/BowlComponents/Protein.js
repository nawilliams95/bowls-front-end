import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {
    return (
        <>
            <h2 className="notification" style={{marginTop: '20px'}}>Choose a Protein:</h2>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Salmon" image="https://i.ibb.co/zGVf5xN/Salmon.jpg"/>
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Salmon</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Chicken" image="https://i.ibb.co/VMmFvGD/Chicken.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Chicken</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Steak" image="https://i.ibb.co/NCc7nrv/Steak.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Steak</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Tofu" image="https://i.ibb.co/xJhBymR/Tofu.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Tofu</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="No Protein" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>No Protein</h6>
            </div>
        </>
    )
}