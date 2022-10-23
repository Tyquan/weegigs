import React from "react";
import { useSelector } from 'react-redux';
import { selectAllGigs, getGigsStatus, getGigsError } from '../gigsSlice';
import GigExcerpt from "./GigExcerpt";

const GigsList = () => {
    const gigs = useSelector(selectAllGigs);
    const gigsStatus = useSelector(getGigsStatus);
    const gigsError = useSelector(getGigsError);

    let renderedGigs;
    if (gigsStatus === 'loading') {
        renderedGigs = <p>Loading...</p>;
    } else if (gigsStatus === 'succeeded') {
        const orderedGigs = gigs.slice().sort((a,b) => b.creationDate.localeCompare(a.creationDate));
        renderedGigs = orderedGigs.map(gig => (
            <GigExcerpt gig={gig} key={gig.id} />
        ));
    } else if (gigsStatus === 'failed') {
        renderedGigs = <p>{gigsError}</p>;
    }

    return (
        <section id="gigsListComponent">
            {renderedGigs}
        </section>
    );
}

export default GigsList;