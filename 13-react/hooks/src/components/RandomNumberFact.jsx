import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomNumberFact = () => {
    const [fact, setFact] = useState('Loading...');

    useEffect(() => {
        axios('http://numbersapi.com/random/trivia?json').then((response) => {
            setFact(response.data.text);
        });
    }, []); // [] - empty arrray means "run this function just once"

    return (
        <p>
            { fact }
        </p>
    );
};

export default RandomNumberFact;