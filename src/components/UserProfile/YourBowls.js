import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function YourBowls(props) {
    let user = JSON.parse(localStorage.getItem('user'));

    const [newBowl, setNewBowl] = useState({
        base: '',
        protein: [],
        sides: [],
        toppings: [],
        sauce: [],
        userID: user.id
    });

    const [allBowls, updateAllBowls] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:8000/api/bowls');
                const data = await response.json();
                updateAllBowls([...data]);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await fetch('/api/bowls', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBowl)
            });
            const data = await response.json();
            await updateAllBowls([...allBowls, data]);
            await setNewBowl({
                base: '',
                protein: [],
                sides: [],
                toppings: [],
                sauce: [],
                userID: user.id
            });
        } catch (error) {
            console.error(error);
        }
    };
    const handleChange = (event) => {
        setNewBowl({ ...newBowl, [event.target.id]: event.target.value });
    };

    return (
        <div className="Page-wrapper slogan is-family-primary has-text-centered has-text-weight-bold">
            <div className="notification " style={{ fontSize: '25px' }}>
                <strong><h1> Add Favorite Bowl </h1></strong>
            </div>
            <form onSubmit={handleSubmit} className="">
            <div class="field">
                <lable htmlFor="base" id="base" >Base:</lable>
                <p className="help">chose from: rice, greens, or no base (must choose one)</p>
                <input
                    type="text"
                    name="base"
                    id="base"
                    value={newBowl.base}
                    onChange={handleChange}
                />
                </div>
                <div class="field">
                <lable htmlFor="protein" id="protein" >Protein:</lable>
                <p className="help">chose from: chicken, steak, tofu, salmon, or no protien (must choose one)</p>
                <input
                    type="text"
                    name="protein"
                    id="protein"
                    value={newBowl.protein}
                    onChange={handleChange}
                />
                </div>
                <div class="field">
                <lable htmlFor="sides" id="sides" >Sides:</lable>
                <p className="help">chose from: sweet potato, red cabbage, avocado, corn, beets, broccoli, no sides (must choose as least one)</p>
                <input
                    type="text"
                    name="sides"
                    id="sides"
                    value={newBowl.sides}
                    onChange={handleChange}
                />
                </div>
                <div class="field">
                <lable htmlFor="toppings" id="toppings" >Toppings:</lable>
                <p className="help">chose from: bacon bits, bread crumbs, crispy parm, red peper flakes, or no toppings (must  choose at least one)</p>
                <input
                    type="text"
                    name="toppings"
                    id="toppings"
                    value={newBowl.toppings}
                    onChange={handleChange}
                />
                </div>
                <div class="field">
                <lable htmlFor="sauce" id="sauce" >Sauce:</lable>
                <p className="help">chose from: white sauce, hot sauce, house sauce, spicy mayo, al sauce, or no sauce (must choose at least one)</p>
                <input
                    type="text"
                    name="sauce"
                    id="sauce"
                    value={newBowl.sauce}
                    onChange={handleChange}
                />
                </div>
                <div class="control">
                <button type="submit" className="button is-info">Create Bowl</button>
                </div>
            </form>



            <div className="notification" style={{ fontSize: '25px', marginTop: '20px' }}>
                <strong><h1>Your Bowls </h1></strong>
            </div>
            {allBowls.length > 0 &&
                allBowls.map((bowl) => {
                    let oneBowl = Object.values(bowl)
                    return (
                        <>
                            <div class="tile is-ancestor" style={{ justifyContent: 'space-around', margin: '30px 40px 20px 40px', marginBottom: '150px' }}>
                                <article class="tile is-child box is-6 is-fluid">
                                    <p class="notification" style={{ fontSize: '20px' }}><strong>Bowl:</strong></p>
                                    
                                        <div class="notification">
                                            <p class="subtitle">
                                                <h6 style={{ fontWeight: 'bold'}}>Base:</h6>
                                                <ul>
                                                    <li>{oneBowl[5]}</li>
                                                </ul>
                                                <h6 style={{ fontWeight: 'bold'}}>Protein:</h6>
                                                <ul>{oneBowl[0].map((item) => {
                                                    return (
                                                        <li>{item}</li>
                                                    )
                                                })}
                                                </ul>
                                                <h6 style={{ fontWeight: 'bold'}}>Sides:</h6>
                                                <ul>{oneBowl[1].map((item) => {
                                                    return (
                                                        <li>{item}</li>
                                                    )
                                                })}
                                                </ul>
                                                <h6 style={{ fontWeight: 'bold'}}>Toppings:</h6>
                                                <ul>{oneBowl[2].map((item) => {
                                                    return (
                                                        <li>{item}</li>
                                                    )
                                                })}
                                                </ul>
                                                <h6 style={{ fontWeight: 'bold'}}>Sauce:</h6>
                                                <ul>{oneBowl[3].map((item) => {
                                                    return (
                                                        <li>{item}</li>
                                                    )
                                                })}
                                                </ul>
                                                <Link to={`/${oneBowl[4]}/edit`} className="button is-primary is-light">[Edit]</Link>
                                            </p>
                                        </div>
                                
                                </article>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
}
