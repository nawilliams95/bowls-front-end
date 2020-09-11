import React from 'react';

export default function Home (props) {
        return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-medium" style={{fontSize: '25px', marginBottom: '30'}}>
                <div className="notification" style={{marginLeft: '300px', marginRight: '300px'}}>
                  <strong>How to Build a Better Bowl:</strong>
                </div> 
                <div className="tile is-ancestor" style={{justifyContent: 'space-around', margin: '30px 40px 20px 40px'}}>
                    <article className="tile is-child box is-3 is-fluid" style={{backgroundColor: '#f5d2b1'}}>
                    <p className="subtitle">First, Choose a <strong>Base</strong>:</p>
                    <figure className="image is-4by3">
                        <img src="https://i.imgur.com/Bz34tHp.jpg" alt="" style={{width: '75%', height: 'auto', borderRadius: '5%', margin: '0 40px 0 35px'}}/>
                    </figure>
                    </article>
                    <article className="tile is-child box is-3" style={{backgroundColor: '#cfd3d4'}}>
                    <p className="subtitle">Second, Choose a <strong>Protein</strong>:</p>
                    <figure className="image is-centered is-4by3">
                        <img src="https://i.imgur.com/OPGvzKD.jpg" alt="" style={{width: '75%', height: 'auto', margin: '0 40px 0 35px', borderRadius: '5%'}}/>
                    </figure>
                    </article>
                    <article className="tile is-child box is-3" style={{backgroundColor: '#cad4c9'}}>
                    <p className="subtitle">Third, Choose two <strong>Sides</strong>:</p>
                    <figure className="image is-4by3">
                        <img src="https://i.imgur.com/U4Ulrbp.jpg" alt="" style={{width: '75%', height: 'auto', margin: '0 40px 0 35px', borderRadius: '5%'}}/>
                    </figure>
                    </article>
                </div>
                <div className="tile is-ancestor" style={{justifyContent: 'space-around', margin: '30px 150px 80px 150px'}}>
                <article className="tile is-child box is-4" style={{backgroundColor: '#f3e7c1'}}>
                    <p className="subtitle">Fourth, Choose a <strong>Topping</strong>:</p>
                    <figure className="image is-4by3">
                        <img src="https://i.imgur.com/RRp17ye.jpg" alt="" style={{width: '75%', height: 'auto', margin: '0 40px 0 35px', borderRadius: '5%'}}/>
                    </figure>
                    </article>
                    <article className="tile is-child box is-4" style={{backgroundColor: '#eca9a4'}}>
                    <p className="subtitle" style={{fontSize: '20px'}}>Lastly, Choose a <strong>Sauce</strong>:</p>
                    <figure className="image is-4by3">
                        <img src="https://i.imgur.com/Zqu8tkq.jpg" alt="" style={{width: '72%', height: 'auto', margin: '0 40px 0 35px', borderRadius: '5%'}}/>
                    </figure>
                    </article>
                </div>
                {/* <div className="container is-fluid" style={{width: '80%'}}>
                <div className="notification">
                    First, Pick a <strong>Base</strong>: 
                </div>
                    <img src="https://i.imgur.com/Bz34tHp.jpg" style={{width: '100px'}}/>
                </div>
                <div className="container is-fluid" style={{width: '80%'}}>
                <div className="notification">
                    Second, Pick a <strong>Protein</strong>: 
                </div>
                    <img src="https://i.imgur.com/OPGvzKD.jpg" style={{width: '100px'}}/>
                </div>
                <div className="container is-fluid" style={{width: '80%'}}>
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
                <div className="container is-fluid" style={{width: '80%'}}>
                <div className="notification">
                    Fourth, Pick a <strong>Topping</strong>: 
                </div>
                    <img src="https://i.imgur.com/RRp17ye.jpg" style={{width: '100px'}}/>
                </div>
                <div className="container is-fluid" style={{width: '80%'}}>
                <div className="notification">
                    Lastly, Drizzle One of Our <strong>Sauces</strong> on Top and Enjoy: 
                </div>
                    <img src="https://i.imgur.com/Zqu8tkq.jpg" style={{width: '125px', marginBottom: '30px'}}/>
                </div> */}
            </div>
        </div>  
        );
    }


