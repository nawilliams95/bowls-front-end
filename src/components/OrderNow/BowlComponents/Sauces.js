import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {
    return (
        <>
            <h2 className="notification" style={{marginTop: '20px'}}>Choose a Sauce Drizzle:</h2>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Hot Sauce" image="https://i.ibb.co/f2TtqP1/SauceHot.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '35px' }}>Hot Sauce</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="White Sauce" image="https://i.ibb.co/ckWXB2c/Sauce-White.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '35px' }}>White Sauce</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Spicy Mayo" image="https://i.ibb.co/WGqfWZ1/Sauce-Sp-Mayo.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '35px' }}>Spicy Mayo</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="House Sauce" image="https://i.ibb.co/7GdCVsR/Sauce-House.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '35px' }}>House Sauce</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="All Sauce" image="https://i.ibb.co/J58FFG9/SauceAll.jpg" />
                <h6 style={{ textAlign: 'center' }}>All Sauce</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="No Sauce" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
                <h6 style={{ textAlign: 'center', marginLeft: '35px' }}>No Sauce</h6>
            </div>
        </>
    )
}