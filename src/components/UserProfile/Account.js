import React from "react";
import { Link } from 'react-router-dom';

export default function Account(props) {
    let user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <h1>Your Acoount</h1>

            <div>
                <div>
                    <h3>Name: {user.name}</h3>
                    <h3>E-mail: {user.email}</h3>
                    <h3>Memeber Since: {user.iat}</h3>
                    <Link to="/yourbowls"><h3>Your Bowls</h3></Link>
                </div>
            </div>
        </>
    );
}
