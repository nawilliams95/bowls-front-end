import React from 'react';
import Boxable from '../Boxable';

export default function Bases(props) {
    return (
        <>
            <h2 className="subtitle is-5">Choose your Sauces:</h2>
            <Boxable targetKey="box" label="Hot Sauce" image="https://i.ibb.co/f2TtqP1/SauceHot.jpg"/>
            <Boxable targetKey="box" label="White Sauce" image="https://i.ibb.co/ckWXB2c/Sauce-White.jpg"/>
            <Boxable targetKey="box" label="Spicy Mayo" image="https://i.ibb.co/WGqfWZ1/Sauce-Sp-Mayo.jpg"/>
            <Boxable targetKey="box" label="House Sauce" image="https://i.ibb.co/7GdCVsR/Sauce-House.jpg"/>
            <Boxable targetKey="box" label="All Sauce" image="https://i.ibb.co/J58FFG9/SauceAll.jpg"/>
            <Boxable targetKey="box" label="No Sauce" image="https://i.ibb.co/bQypwjK/NoBase.jpg" />
        </>
    )
}