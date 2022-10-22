import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

const GigTime = ({ time }) => {
    let timeAgo = '';
    if (time) {
        const date = parseISO(time);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }
    return (
        <span title={time}>&nbsp; <i>{timeAgo}</i></span>
    );
};

export default GigTime;