import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectAllGigs, fetchGigs, getGigsStatus, getGigsError } from '../gigSlice';
import GigExcerpt from "./GigExcerpt";

const GigsList = () => {
    const gigs = useSelector(selectAllGigs);
    const gigsStatus = useSelector(getGigsStatus);
    const gigsError = useSelector(getGigsError);

    const dispatch = useDispatch();

    useEffect(() => {
        if (gigsStatus === 'idle') {
            dispatch(fetchGigs());
        }
    }, [gigsStatus, dispatch])

    let renderedGigs;
    if (gigsStatus === 'loading') {
        renderedGigs = <p>Loading...</p>;
    } else if (gigsStatus === 'succeeded') {
        const orderedGigs = gigs.slice().sort((a,b) => b.creationDate.localeCompare(a.creationDate));
        renderedGigs = orderedGigs.map(gig => (
            <GigExcerpt gig={gig} key={gig.id} />
        ));
    } else if (gigsStatus === 'failed') {
        renderedGigs = <p>{error}</p>;
    }
    
    return (
        <section id="gigsListComponent">
            <h1>GigsList</h1>
            {renderedGigs}
        </section>
    );
}

export default GigsList;