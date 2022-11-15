import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberFact = () => {
    const [number, setNumber] = useState(0);
    const [fact, setFact] = useState('Loading...');
 
    const _handleInput = (e) => {
        setNumber(Number(e.target.value));
    }
    
    useEffect(() => {
        axios(`http://numbersapi.com/${ number }/trivia?json`).then((response) => {
            setFact(response.data.text);
        });
    }, [number]); // when number changes, useEffect will run the callback again

    return (
        <div>
            <p>{ fact }</p>
            <input type="number" placeholder="Enter a number" onInput={ _handleInput } />
        </div>
    );
};

export default NumberFact;