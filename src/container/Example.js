import React, { useEffect, useRef, useState } from 'react';

function Example(props) {
    const [name, setName] = useRef('')
    const [count, setCount] = useState('')

    const nameRef = useRef('')

    const rendercount = useRef('')

    const prevRef = useRef('')

    useEffect(() => {
        rendercount.current = rendercount.current +1;

        prevRef.current = name

    })


    const handleFocus = () => {
        console.log('yyyyyyyyy');
        console.log(nameRef.current);
        nameRef.current.style.backgroundcolor = 'red'
    }

    return (
        <div>
            <input
                type='text'
                onChange={(event) => setName(event.target.value)}
                name='name'
                onFocus={handleFocus}
                ref={nameRef}
            />

            render componet : {rendercount.current}

            state value : ()
        </div>
    );
}

export default Example;