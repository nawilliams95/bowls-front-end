import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
let endpoint = 'http://localhost:8000/api/bowls';

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
    },);
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
            history.push('/yourbowls');
        } catch (error) {
            console.error(error);
        }
    };
    const handleChange = (event) => {
        updateBowl({ ...bowl, [event.target.id]: event.target.value });
    };

    return (
        <div className="Page-wrapper">

            <h1> Edit you bowl </h1>
            {Object.keys(bowl).length > 0 ? (
                <div>
                    <form onSubmit={handleSubmit} className="">
                        <label htmlFor="base" id="base" >Base:</label>
                        <p>chose from: rice, greens, or no base (must choose one)</p>
                        <input
                            type="text"
                            name="base"
                            id="base"
                            value={bowl.base}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="protein" id="protein" >Protein:</label>
                        <p>chose from: chicken, steak, tofu, salmon, or no protien (must choose one)</p>
                        <input
                            type="text"
                            name="protein"
                            id="protein"
                            value={bowl.protein}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="sides" id="sides" >Sides:</label>
                        <p>chose from: sweet potato, red cabbage, avocado, corn, beets, broccoli, no sides (must choose as least one)</p>
                        <input
                            type="text"
                            name="sides"
                            id="sides"
                            value={bowl.sides}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="toppings" id="toppings" >Toppings:</label>
                        <p>chose from: bacon bits, bread crumbs, crispy parm, red peper flakes, or no toppings (must  choose at least one)</p>
                        <input
                            type="text"
                            name="toppings"
                            id="toppings"
                            value={bowl.toppings}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="sauce" id="sauce" >Sauce:</label>
                        <p>chose from: white sauce, hot sauce, house sauce, spicy mayo, al sauce, or no sauce (must choose at least one)</p>
                        <input
                            type="text"
                            name="sauce"
                            id="sauce"
                            value={bowl.sauce}
                            onChange={handleChange}
                        />
                        <br />
                        <button type="submit">Update Bowl</button>
                    </form>
                    <button className="control_button" onClick={deleteBowl}>
                        Delete
                    </button>
                </div>
            ) : (
                    <h1>Nothing found on {props.match.params.id}.</h1>
                )}
            <h3>
                <Link to={'/yourbowls'}>Back</Link>
            </h3>
        </div>
    )
}
