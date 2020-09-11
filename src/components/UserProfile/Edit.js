import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
let endpoint = 'https://better-bowl-back.herokuapp.com/api/bowls';

export default function Show(props) {
    const [bowl, updateBowl] = useState({});
    let history = useHistory();
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${endpoint}/${props.match.params.id}`);
                const data = await response.json();
                await updateBowl(data);
            } catch (e) {
                console.error(e);
            }
        })();
    });
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`${endpoint}/${props.match.params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(...bowl)
            });
            const data = await response.json();
            await updateBowl({ ...bowl, data });
        } catch (error) {
            console.error(error);
        }
    };
    const deleteBowl = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`${endpoint}/${props.match.params.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            await updateBowl({});
            console.log(response + 'was done')
            history.push('/yourbowls');
        } catch (error) {
            console.error(error);
        }
    };
    const handleChange = (event) => {
        updateBowl({ ...bowl, [event.target.id]: event.target.value });
    };

    return (
        <div className="Page-wrapper slogan is-family-primary has-text-centered has-text-weight-bold">
            <div className="notification " style={{ fontSize: '25px' }}>
                <strong><h1> Edit Bowl </h1></strong>
            </div>
            {Object.keys(bowl).length > 0 ? (
                <div>
                    <form onSubmit={handleSubmit} className="">
                        <div class="field">
                            <lable htmlFor="base" id="base" >Base:</lable>
                            <p className="help">chose from: rice, greens, or no base (must choose one)</p>
                            <input
                                type="text"
                                name="base"
                                id="base"
                                value={bowl.base}
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
                                value={bowl.protein}
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
                                value={bowl.sides}
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
                                value={bowl.toppings}
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
                                value={bowl.sauce}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="control">
                            <button type="submit" className="button is-info">Update Bowl</button>
                        </div>
                    </form>
                    <p class="control">
                        <button className="button is-danger" style={{ marginTop: '15px' }} onClick={deleteBowl}>
                            Delete
                    </button>
                    </p> 
                    <div>
                    <a className="button is-info is-light" href="/yourbowls" style={{ marginTop: '12px'}}>Back</a>
                    </div>
                </div>
            ) : (
                    <h1>Nothing found on {props.match.params.id}.</h1>
                )
            }
            
               
            
        </div >
    )
}
