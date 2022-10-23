import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StaticHeader from '../../components/StaticHeader';
import GigAuthor from '../../features/gigs/components/GigAuthor';
import GigTime from '../../features/gigs/components/GigTime';
import { selectGigById } from '../../features/gigs/gigsSlice';

const SingleGigPage = () => {
    const { gigId } = useParams();
    const gig = useSelector((state) => selectGigById(state, Number(gigId)));

    if (!gig) {
        return (
            <section>
                <h2>Gig not found...</h2>
            </section>
        );
    }

    return (
        <article>
            <StaticHeader />
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