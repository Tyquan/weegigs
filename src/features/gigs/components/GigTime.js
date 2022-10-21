import React from "react";

const GigTime = ({ time }) => {
    return (
        <span title={time}>&nbsp; <i>{time}</i></span>
    );
};

export default GigTime;