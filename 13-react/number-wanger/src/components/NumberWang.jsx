import React, { Component } from 'react';
import axios from 'axios';

class NumberWang extends Component {
    constructor() {
        super();
        this.state = {
            facts: []
        };
        this._fetchFact = this._fetchFact.bind(this);
    }

    _fetchFact() {
        axios('http://numbersapi.com/random/trivia?json').then((response) => {
            this.setState({facts: [...this.state.facts, response.data.text]});

            console.log("That's numberwang!".split('').map(
                (c) => Math.random() > 0.5 ? c.toUpperCase() : c
            ).join(''));
        });
    }

    render() {
        return (
            <div>
                <button onClick={ this._fetchFact } title={ (777 * Math.random()).toFixed(3) }>
                    Numberwang
                </button>
                <ul>
                    { this.state.facts.map((fact, i) => <li key={i}>{fact}</li>) }
                </ul>
            </div>
        );
    }
}

export default NumberWang;