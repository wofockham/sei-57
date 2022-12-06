import axios from 'axios';
import React, { Component } from 'react';

class BookSearch extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            cover: null
        };
        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleInput (event) {
        this.setState({query: event.target.value, cover: null }); // asynchronous
    }

    async _handleSubmit (event) {
        event.preventDefault();
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${ this.state.query }`);
        const cover = response.data.items[0].volumeInfo.imageLinks.thumbnail;
        this.setState({cover: cover});
    }

    render() {
        const { cover, query } = this.state;
        return (
            <div>
                <form onSubmit={ this._handleSubmit }>
                    <label>
                        Book title:
                        <input
                            type="search"
                            placeholder="Jaws"
                            autoFocus
                            required
                            onChange={ this._handleInput }
                        />
                    </label>

                    <button>Search</button>
                </form>
                { cover && <img src={ cover } alt={ query } /> }
            </div>
        );
    }
}

export default BookSearch;