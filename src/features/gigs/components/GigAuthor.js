import React from 'react';

const GigAuthor = ({ company }) => {
    return <span>Posted By: {company ? company : 'Unknown Company'} </span>
}

export default GigAuthor;