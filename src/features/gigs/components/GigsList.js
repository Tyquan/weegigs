import React from "react";
import { useSelector } from 'react-redux';
import { selectAllGigs } from '../gigSlice';
import GigAuthor from "./GigAuthor";
import GigTime from "./GigTime";

const GigsList = () => {
    const gigs = useSelector(selectAllGigs);

    const orderedGigs = gigs.slice().sort((a,b) => b.creationDate.localeCompare(a.creationDate));

    const renderedGigs = orderedGigs.map(gig => (
        <article key={gig._id}>
            <h3>{gig.title}</h3>
            <p id="gigCredit">
                <GigAuthor company={gig.company} />
                <br />
                <GigTime time={gig.creationDate} />
            </p>
        </article>
    ));

    return (
        <section id="gigsListComponent">
            <h1>GigsList</h1>
            {renderedGigs}
        </section>
    );
}

export default GigsList;