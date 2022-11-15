import React, { useState } from 'react';

const Clickr = () => {

    const [clicks, setClicks] = useState(0); // 0: initial state

    const _handleClick = () => {
        setClicks( clicks + 1 ); // this will "rerender" with the new data
    }

    return (
        <button onClick={ _handleClick }>
            { clicks } clicks so far
        </button>
    );
};

export default Clickr;