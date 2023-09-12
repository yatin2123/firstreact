import React, { useEffect } from 'react';

function Lifi_cy({number}) {

    useEffect(() => {
        console.log("updating...");
    })
    return (
        <div>
            <h1>{number}</h1>
        </div>
    );
}

export default Lifi_cy;