import React from 'react';
import { Link } from 'react-router-dom';

const StaticHeader = () => {
    return (
        <header id='staticHeader'>
            <Link to="/"><h1>Weegigs</h1></Link>
        </header>
        
    );
};

export default StaticHeader;