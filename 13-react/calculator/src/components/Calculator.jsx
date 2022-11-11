import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0
        };
        this._updateA = this._updateA.bind(this); // Magic that makes it work
        this._updateB = this._updateB.bind(this);
    }

    _updateA(event) {
        this.setState({a: Number(event.target.value)});        
    }

    _updateB(event) {
        this.setState({b: Number(event.target.value)});
    }

    render() {
        const { a, b } = this.state;
        return (
            <div>
                <h1>Credible Calculator</h1>
                <input onChange={ this._updateA } type="number" value={ a || '' } />
                <input onChange={ this._updateB } type="number" value={ b || '' } />

                <h2>Results</h2>
                <p>{ a } + { b } = { a + b }</p>
                <p>{ a } - { b } = { a - b }</p>
                <p>{ a } * { b } = { a * b }</p>
                <p>{ a } / { b } = { a / b }</p>
            </div>
        );
    }
}

export default Calculator;