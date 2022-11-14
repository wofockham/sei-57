import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Gallery from './Gallery';

class ImageSearch extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
        this.fetchImages = this.fetchImages.bind(this);
    }

    fetchImages(q) {
        console.log('Searching for', q);

        const flickrURL = 'https://api.flickr.com/services/rest';
        const flickrParams = {
            method: 'flickr.photos.search',
            api_key: '2f5ac274ecfac5a455f38745704ad084',
            text: q,
            format: 'json',
            nojsoncallback: 1
        };

        const generateURL = function (p) {
            return [
                'http://farm',
                p.farm,
                '.static.flickr.com/',
                p.server,
                '/',
                p.id,
                '_',
                p.secret,
                '_q.jpg' // change 'q' to something else for different sizes (see documentation)
            ].join('');
        };

        axios(flickrURL, {params: flickrParams}).then((response) => {
            const images = response.data.photos.photo.map(generateURL);
            this.setState({images: images});
        });
    }

    render() {
        return (
            <div>
                <SearchForm onSubmit={ this.fetchImages } />
                <Gallery images={ this.state.images } />
            </div>
        );
    }
}

export default ImageSearch;