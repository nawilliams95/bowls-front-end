import React from 'react';


export default function Home (props) {
        return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-medium" style={{fontSize: '25px', marginBottom: '30'}}>
                <div class="notification" style={{marginLeft: '300px', marginRight: '300px'}}>
                  <strong>How to Build a Better Bowl:</strong>
                </div> 
                <div class="tile is-ancestor" style={{justifyContent: 'space-around', margin: '30px 40px 20px 40px'}}>
                    <article class="tile is-child box is-3" style={{backgroundColor: '#f5d2b1'}}>
                    <p class="subtitle">First, Choose a <strong>Base</strong>:</p>
                    <figure class="image is-4by3">
                        <img src="https://i.imgur.com/Bz34tHp.jpg" style={{width: '75%', height: 'auto', marginLeft: '37px', borderRadius: '5%'}}/>
                    </figure>
                    </article>
                    <article class="tile is-child box is-3" style={{backgroundColor: '#cfd3d4'}}>
                    <p class="subtitle">Second, Choose a <strong>Protein</strong>:</p>
                    <figure class="image is-4by3">
                        <img src="https://i.imgur.com/OPGvzKD.jpg" style={{width: '75%', height: 'auto', marginLeft: '37px', borderRadius: '5%'}}/>
                    </figure>
                    </article>
                    <article class="tile is-child box is-3" style={{backgroundColor: '#cad4c9'}}>
                    <p class="subtitle">Third, Choose two <strong>Sides</strong>:</p>
                    <figure class="image is-4by3">
                        <img src="https://i.imgur.com/U4Ulrbp.jpg" style={{width: '75%', height: 'auto', marginLeft: '37px', borderRadius: '5%'}}/>
                    </figure>
                    </article>
                </div>
                <div class="tile is-ancestor" style={{justifyContent: 'space-around', margin: '30px 150px 80px 150px'}}>
                <article class="tile is-child box is-4" style={{backgroundColor: '#f3e7c1'}}>
                    <p class="subtitle">Fourth, Choose a <strong>Topping</strong>:</p>
                    <figure class="image is-4by3">
                        <img src="https://i.imgur.com/RRp17ye.jpg" style={{width: '75%', height: 'auto', marginLeft: '40px', borderRadius: '5%'}}/>
                    </figure>
                    </article>
                    <article class="tile is-child box is-4" style={{backgroundColor: '#eca9a4'}}>
                    <p class="subtitle">Lastly, Choose a <strong>Sauce</strong> and Enjoy:</p>
                    <figure class="image is-4by3">
                        <img src="https://i.imgur.com/Zqu8tkq.jpg" style={{width: '72%', height: 'auto', marginLeft: '50px', borderRadius: '5%', marginTop: '10px'}}/>
                    </figure>
                    </article>
                </div>
                {/* <div class="container is-fluid" style={{width: '80%'}}>
                <div class="notification">
                    First, Pick a <strong>Base</strong>: 
                </div>
                    <img src="https://i.imgur.com/Bz34tHp.jpg" style={{width: '100px'}}/>
                </div>
                <div class="container is-fluid" style={{width: '80%'}}>
                <div class="notification">
                    Second, Pick a <strong>Protein</strong>: 
                </div>
                    <img src="https://i.imgur.com/OPGvzKD.jpg" style={{width: '100px'}}/>
                </div>
                <div class="container is-fluid" style={{width: '80%'}}>
                <div class="notification">
                    Third, Pick two <strong>Sides</strong>: 
                </div>
                <span>
                    <img src="https://i.imgur.com/abBeeSi.jpg" style={{width: '100px'}}/>
                </span>
                <span>
                    <img src="https://i.imgur.com/U4Ulrbp.jpg" style={{width: '100px'}}/>
                </span>
                </div>
                <div class="container is-fluid" style={{width: '80%'}}>
                <div class="notification">
                    Fourth, Pick a <strong>Topping</strong>: 
                </div>
                    <img src="https://i.imgur.com/RRp17ye.jpg" style={{width: '100px'}}/>
                </div>
                <div class="container is-fluid" style={{width: '80%'}}>
                <div class="notification">
                    Lastly, Drizzle One of Our <strong>Sauces</strong> on Top and Enjoy: 
                </div>
                    <img src="https://i.imgur.com/Zqu8tkq.jpg" style={{width: '125px', marginBottom: '30px'}}/>
                </div> */}
            </div>
        </div>  
        );
    }


