import React, { Component, useState } from 'react';
// TODO: import axios

class Secrets extends Component {
    constructor() {
        super();
        this.state = {
            secrets: []
        };
        this.saveSecret = this.saveSecret.bind(this);
    }

    saveSecret(content) {
        // TODO: save this secret to the server
        // TODO: poll the server for new secrets
        
        // fake secret object with the right shape
        const secret = {
            id: Math.random(),
            content: content
        };
        this.setState({secrets: [secret, ...this.state.secrets]}); // spread operator
    }

    render() {
        return (
            <div>
                <h1>Tell us all your secrets...</h1>
                <SecretForm onSubmit={ this.saveSecret } />
                <SecretsList secrets={ this.state.secrets } />
            </div>
        );
    }
}

const SecretForm = (props) => {
    const [content, setContent] = useState('');
    const _handleInput = (e) => {
        setContent(e.target.value);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content);
    }

    return (
        <form onSubmit={ _handleSubmit }>
            <textarea onInput={ _handleInput } required></textarea>
            <input type="submit" value="Tell" />
        </form>
    );
};

const SecretsList = (props) => {
    return (
        <div>
            { props.secrets.map((s) => <p key={ s.id }>{ s.content }</p>) }
        </div>
    );
}


export default Secrets;