import React, { useState } from 'react';

const Echo = () => {
    const [message, setMessage] = useState(''); // returns the current value and a function that lets you change that value

    return (
        <div>
            <h2>{ message }</h2>
            <input placeholder="your message here" onInput={ (e) => setMessage(e.target.value) } />
        </div>
    );
};

export default Echo;