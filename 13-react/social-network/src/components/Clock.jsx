import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: (new Date()).toLocaleString()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({time: (new Date()).toLocaleString()})
        }, 1000);
    }

    render() {
        return (
            <p className="fancy-clock">
                { this.state.time }
            </p>
        )
    }
}

export default Clock;