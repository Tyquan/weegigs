import React from 'react';

const GigAuthor = ({ company }) => {
    return <span>Company: {company ? company : 'Unknown Company'} </span>;
}

export default GigAuthor;