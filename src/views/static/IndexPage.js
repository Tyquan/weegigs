import React from "react";
import StaticHeader from "../../components/StaticHeader";
import GigsList from "../../features/gigs/components/GigsList";

const IndexPage = () => {
    return (
        <div id="indexPage">
            <StaticHeader /> 
            <GigsList />
        </div>
    );
}

export default IndexPage;