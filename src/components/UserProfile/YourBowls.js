import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function YourBowls(props) {
    let user = JSON.parse(localStorage.getItem('user'));

    const [newBowl, setNewBowl] = useState({
        base: '',
        protein: [],
        sides: [],
        toppings: [],
        sauce: [],
        userID: ''
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
                userID: ''
            });
        } catch (error) {
            console.error(error);
        }
    };
    // const handleChange = () => {
    //     setNewBowl({ ...newBowl, [event.target.id]: event.target.value });
    // };
    // const handleCheck = () => {
    //     setNewBowl({ ...newBowl, [event.target.id]: event.target.checked });
    // };

    return (
        <div className="Page-wrapper">

            <h1> Add Favorite Bowl </h1>
			

            {allBowls.length > 0 &&
                allBowls.map((bowl) => {
                    let oneBowl = Object.values(bowl)
                    return (
                        <>
                        <h2>Bowl:</h2>
                        <h6>Base:</h6>
                        <ul>
                            <li>{oneBowl[5]}</li>
                        </ul>
                        <h6>Protein:</h6>
                        <ul>{oneBowl[0].map((item) =>{
                            return(
                            <li>{item}</li>
                            )
                        })}
                        </ul>
                        <h6>Sides:</h6>
                        <ul>{oneBowl[1].map((item) =>{
                            return(
                            <li>{item}</li>
                            )
                        })}
                        </ul>
                        <h6>Toppings:</h6>
                        <ul>{oneBowl[2].map((item) =>{
                            return(
                            <li>{item}</li>
                            )
                        })}
                        </ul>
                        <h6>Sauce:</h6>
                        <ul>{oneBowl[3].map((item) =>{
                            return(
                            <li>{item}</li>
                            )
                        })}
                        </ul>
                        </>
                        // <ul key={index}>
                        //     {Object.entries(bowl).map((key) => {
                        //         return (
                        //             <li key={key}>{key}:{bowl[index]}</li>
                        //         )
                        //     })}
                        // </ul>
                    )
                })}
        </div>
    );
}
