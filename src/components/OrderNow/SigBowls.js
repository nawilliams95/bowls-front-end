import React from 'react';

export default function SigBowls(props) {
    return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-medium" style={{ fontSize: '25px', marginBottom: '30' }}>
                <div class="notification" style={{ marginLeft: '300px', marginRight: '300px', marginBottom: '70px' }}>
                    <strong>Signature Better Bowls:</strong>
                </div>
                <div class="tile is-ancestor" style={{ justifyContent: 'space-around', margin: '30px 40px 20px 40px', marginBottom: '150px' }}>
                    <article class="tile is-child box is-3 is-fluid">
                        <p class="notification" style={{ fontSize: '20px' }}><strong>Surf & Actual Turf</strong></p>
                        <figure class="image is-4by3">
                            <img src="https://i.imgur.com/Zz9z9FV.png" alt="" style={{ width: '95%', height: 'auto', margin: '-20px 20px 0 10px' }} />
                            <br />
                            <div class="notification">
                                <p class="subtitle">
                                    Greens,
                            <br />
                                Salmon,
                            <br />
                                Sweet Potatoes, Avocado,
                            <br />
                                Topped with Garlic Breadcrumbs,
                            <br />
                                Drizzled with Our Spicy Mayo
                            </p>
                            </div>
                        </figure>
                    </article>
                    <article class="tile is-child box is-3">
                        <p class="notification" style={{ fontSize: '20px' }}><strong>Ace-No-Base</strong></p>
                        <figure class="image is-4by3">
                            <img src="https://i.imgur.com/LvdgnYq.png" alt="" style={{ width: '90%', height: 'auto', marginLeft: '37px', margin: '-20px 20px 0 10px' }} />
                            <br />
                            <div class="notification">
                                <p class="subtitle">
                                    No Base,
                            <br />
                                Chicken,
                            <br />
                                Beets, Broccoli,
                            <br />
                                Topped with Crispy Parmasean,
                            <br />
                                Drizzled with Our Hot Sauce
                            </p>
                            </div>
                        </figure>
                    </article>
                    <article class="tile is-child box is-3">
                        <p class="notification" style={{ fontSize: '20px' }}><strong>Killer Tofu</strong></p>
                        <figure class="image is-4by3">
                            <img src="https://i.imgur.com/QzVV499.png" alt="" style={{ width: '85%', height: 'auto', marginLeft: '37px', margin: '-20px 20px 0 10px' }} />
                            <br />
                            <div class="notification">
                                <p class="subtitle">
                                    Rice,
                        <br />
                            Tofu,
                        <br />
                            Corn, Red Cabbage,
                        <br />
                            Topped with Red Pepper Flakes,
                        <br />
                            Drizzled with Our House Sauce
                        </p>
                            </div>
                        </figure>
                    </article>
                </div>
            </div>
        </div>
    );
}
