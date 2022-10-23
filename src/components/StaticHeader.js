import React from 'react';
import { Link } from 'react-router-dom';

const StaticHeader = () => {
    return (
        <header id='staticHeader'>
            <Link to="/"><h1>Weegigs</h1></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gig">Add Gig</Link></li>
            </ul>
        </header>
        
    );
};

export default StaticHeader;