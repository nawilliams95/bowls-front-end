import React from "react";


export default function Account(props) {
    let user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-bold" style={{ fontSize: '20px', marginBottom: '30' }}>
                <div className="container is-fluid" style={{ width: '50%', height: '100px' }}>
                    <div className="notification" style={{ fontSize: '25px' }}>
                        <strong>Your Account</strong>
                        <h3><span style={{ fontWeight: 'bold'}}>Name:</span> {user.name}</h3>
                        <h3> <span style={{ fontWeight: 'bold'}}>E-mail:</span> {user.email}</h3>
                        <h3> <span style={{ fontWeight: 'bold'}}>Memeber Since:</span> {user.iat}</h3>
                        <a href="/yourbowls" className="button is-info"> Your Bowls</a>
                    </div>



                </div>
            </div>
        </div>
    );
}
