import React from 'react';
import { useSelector } from 'react-redux';
import GigAuthor from '../../features/gigs/components/GigAuthor';
import GigTime from '../../features/gigs/components/GigTime';
import { selectGigById } from '../../features/gigs/gigsSlice';

const SingleGigPage = () => {

    const gig = useSelector((state) => selectGigById(state, gigId));

    if (!gig) {
        return (
            <section>
                <h2>Gig not found...</h2>
            </section>
        );
    }

    return (
        <article>
            <h2>{gig.title}</h2>
            <p>{gig.body}</p>
            <p id="gigCredit">
                <GigAuthor company={gig.company} />
                <GigTime time={gig.creationDate} />
            </p>
        </article>
    );
}

export default SingleGigPage;