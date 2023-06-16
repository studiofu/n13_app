'use client';

import callAPI from "../actions/CallApi";

const externalSitePage = () => {

    callAPI();

    return (
        <div>
        <h1>External Site</h1>
        </div>
    )
}

export default externalSitePage;



