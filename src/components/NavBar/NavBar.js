import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
import './NavBar.css';

export default function NavBar(props) {
    let navBarItems = [
        <li key={1}>
            <a href="/about" className="navbar-item about" style={{}}>
                About
            </a>
        </li>,
        <li key={2}>
            <a href="/contact" className="navbar-item contact">
                Contact
            </a>
        </li>,
        <li key={3}>
            <div className="navbar-item has-dropdown is-hoverable">
                <a href="/ordernow" className="navbar-link">
                    Order
                </a>
                <div className="navbar-dropdown">
                <Link to="/sigbowls" className="navbar-item"> 
                Signature Better Bowls
                    </Link>
                    <a href="/createbowl" className="navbar-item">
                        Custom Bowl Visualizer
                    </a>
                </div>
            </div>
        </li>

    ];
    if (props.isLoggedIn) {
        navBarItems.push(
            <li key={4}>
                <LogOut handleLogOut={props.handleLogOut} />
            </li>
        );
    } else {
        navBarItems.push(
            <li key={5}>
                <div className="navbar-end" style={{marginTop: '15px'}}>
                    <div className="navbar-item auth">
                        <div className="buttons">
                            <a href="/signup" className="button is-info">
                                <strong>Sign up</strong>
                            </a>
                            <a href="/login" className="button is-light">
                                Log in
                                </a>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{width: '100%'}}>
            <div className="navbar-brand">
                <a href="/home">
                    <img id="nav-logo" src="https://i.imgur.com/0Z61aZV.png"
                        alt="" style={{ width: '250px' }}
                    />
                </a>
                <a href='/home' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <ul>{navBarItems}</ul>
                </div>
            </div>
        </nav>
    );
}



