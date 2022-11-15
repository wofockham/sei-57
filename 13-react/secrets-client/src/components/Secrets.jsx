import axios from 'axios';
import React, { Component, useState } from 'react';

const SECRETS_URL = 'http://localhost:3000/secrets.json'; // Later: change this to the deployed (AKA Heroku) URL

class Secrets extends Component {
    constructor() {
        super();
        this.state = {
            secrets: []
        };
        this.saveSecret = this.saveSecret.bind(this);
    }

    componentDidMount() {
        const fetchSecrets = () => {
            axios(SECRETS_URL).then((response) => {
                this.setState({secrets: response.data});
                setTimeout(fetchSecrets, 4000); // polling
            });
        };

        fetchSecrets();
    }

    saveSecret(content) {
        axios.post(SECRETS_URL, { content: content }).then((response) => {
            this.setState({secrets: [response.data, ...this.state.secrets]}); // Add the new secret to our state so it renders immediately
        });
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
        setContent(''); // empty the textarea
    }

    return (
        <form onSubmit={ _handleSubmit }>
            <textarea onInput={ _handleInput } required value={ content }></textarea>
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