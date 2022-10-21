import React from 'react';
import GigAuthor from "./GigAuthor";
import GigTime from "./GigTime";

const GigExcerpt = ({ gig }) => {
    return (
        <article>
            <h3>{gig.title}</h3>
            <p id="gigCredit">
                <GigAuthor company={gig.company} />
                <br />
                <GigTime time={gig.creationDate} />
            </p>
        </article>
        
    );
};

export default GigExcerpt;