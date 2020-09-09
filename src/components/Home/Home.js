import React from 'react';


export default function Home (props) {
        return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-bold" style={{fontSize: '20px', marginBottom: '30'}}>
                <h1>
                  How to Build a Better Bowl:
                </h1>
                <div className="container is-fluid" style={{width: '50%'}}>
                <div className="notification">
                    First, Pick a <strong>Base</strong>: 
                </div>
                    <img src="https://i.imgur.com/Bz34tHp.jpg" style={{width: '100px'}}/>
                </div>
                <div className="container is-fluid" style={{width: '50%'}}>
                <div className="notification">
                    Second, Pick a <strong>Protein</strong>: 
                </div>
                    <img src="https://i.imgur.com/OPGvzKD.jpg" style={{width: '100px'}}/>
                </div>
                <div className="container is-fluid" style={{width: '50%'}}>
                <div className="notification">
                    Third, Pick two <strong>Sides</strong>: 
                </div>
                <span>
                    <img src="https://i.imgur.com/abBeeSi.jpg" style={{width: '100px'}}/>
                </span>
                <span>
                    <img src="https://i.imgur.com/U4Ulrbp.jpg" style={{width: '100px'}}/>
                </span>
                </div>
                <div className="container is-fluid" style={{width: '50%'}}>
                <div className="notification">
                    Fourth, Pick a <strong>Topping</strong>: 
                </div>
                    <img src="https://i.imgur.com/RRp17ye.jpg" style={{width: '100px'}}/>
                </div>
                <div className="container is-fluid" style={{width: '50%'}}>
                <div className="notification">
                    Lastly, Drizzle One of Our <strong>Sauces</strong> on Top and Enjoy: 
                </div>
                    <img src="https://i.imgur.com/Zqu8tkq.jpg" style={{width: '150px'}}/>
                </div>
            </div>
        </div>  
        );
    }


