import React from 'react';
import { Link } from 'react-router-dom';
import GigAuthor from "./GigAuthor";
import GigTime from "./GigTime";

const GigExcerpt = ({ gig }) => {
    return (
        <article>
            <h2>{gig.title}</h2>
            <p>
                {gig.body.substring(0, 100)}...
                <span><Link to={`gig/${gig.id}`}>View Gig</Link></span>
            </p>
            <p id="gigCredit">
                <GigAuthor userId={gig.userId} />
                <br />
                <GigTime time={gig.creationDate} />
            </p>
        </article>
        
    );
};

export default GigExcerpt;