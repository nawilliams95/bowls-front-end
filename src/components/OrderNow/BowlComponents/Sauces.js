import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {
    return (
        <>
            <h2 className="subtitle is-5">Choose your Sauces:</h2>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Hot Sauce" image="https://i.ibb.co/f2TtqP1/SauceHot.jpg" />
                <h6 style={{ textAlign: 'center' }}>Hot Sauce</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="White Sauce" image="https://i.ibb.co/ckWXB2c/Sauce-White.jpg" />
                <h6 style={{ textAlign: 'center' }}>White Sauce</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="Spicy Mayo" image="https://i.ibb.co/WGqfWZ1/Sauce-Sp-Mayo.jpg" />
                <h6 style={{ textAlign: 'center' }}>Spicy Mayo</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="House Sauce" image="https://i.ibb.co/7GdCVsR/Sauce-House.jpg" />
                <h6 style={{ textAlign: 'center' }}>House Sauce</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="All Sauce" image="https://i.ibb.co/J58FFG9/SauceAll.jpg" />
                <h6 style={{ textAlign: 'center' }}>All Sauce</h6>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Boxable targetKey="box" label="No Sauce" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
                <h6 style={{ textAlign: 'center' }}>No Sauce</h6>
            </div>
        </>
    )
}