import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _ from 'underscore';

const Home = () => {
    const navigate = useNavigate();

    const _gotoRandomUser = () => {
        const students = ["Anico94", "gissell10", "isabelsousac", "Jason-Luo8", "jiakairen", "MnRxi6f8JN", "pawspower", "manderson3568", "kyliexmq", "sophiapache", "talalhamzeh"];
        const randomStudent = _(students).sample(); 
        navigate(`/profile/${ randomStudent }`);
    };

    return (
        <div>
            <h1>Github Search</h1>
            <Link to="/search">
                <button>Search for a user</button>
            </Link>

            <button onClick={ _gotoRandomUser }>Random user</button>
        </div>
    );
}

export default Home;