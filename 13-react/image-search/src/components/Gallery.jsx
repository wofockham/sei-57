import React from 'react';

// Functional components behave just like the render() method.
const Gallery = function (props) {
    console.log(props);
    return (
        <div>
            { props.images.map((url) => <img src={url} key={ url } />) }
        </div>
    );
}

export default Gallery;