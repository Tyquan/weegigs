import React from "react";
import AddGigForm from "../../features/gigs/components/AddGigForm";
import GigsList from "../../features/gigs/components/GigsList";

const IndexPage = () => {
    return (
        <div id="indexPage">
            <AddGigForm />
            <br />    
            <GigsList />
        </div>
    );
}

export default IndexPage;