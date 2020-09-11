import React from 'react';
import Boxable from '../Boxable';

export default function Sides(props) {
    return (
        <>
            <h2 className="notification" style={{marginTop: '20px'}}>Choose your Sides:</h2>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Sweet Potato" image="https://i.ibb.co/rbCK5Bc/Swt-Potato.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Sweet Potato</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Red Cabbage" image="https://i.ibb.co/gy3YQfg/Red-Cabbage.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Red Cabbage</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Corn" image="https://i.ibb.co/pQy08Kk/Corn.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Corn</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Beets" image="https://i.ibb.co/dDrbqYw/Beets.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Beets</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Broccoli" image="https://i.ibb.co/frQQKQ1/Broccoli.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Broccoli</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Avocado" image="https://i.ibb.co/Qd0n4Yn/Avocado.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>Avocado</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="No sides" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '45px' }}>No Sides</h6>
            </div>
        </>
    )
}