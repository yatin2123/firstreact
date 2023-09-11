import React, { useState } from 'react';

function CountFun(props) {

    const [countName=0, setcountName] = useState()

    const handleincrement = () => {
        setcountName(countName+1)
    }

    const handledcrement = () => {
        setcountName(countName-1)
    }
    return (
        <div>
            <h1>Count based componetn</h1>
            <button onClick={handleincrement}>+</button>
            {countName}
            <button onClick={handledcrement}>-</button>
        </div>
    );
}

export default CountFun;