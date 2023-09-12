import React, { useEffect, useState } from 'react';

function TimerFun(props) {
    //1.
    const [time, setTime] = useState(new Date());
    const tick = () => {
        setTime(new Date())
        console.log(tick);
    }

    useEffect(() => {
        //3.componentDidMount
        const timer = setInterval(() => tick(), 1000)
        console.log('componentDidMount', 'componentDidUpdate');

        return () => {
            console.log('componentWillUnmount');
            clearInterval(timer)
        }
    }, [time])

    //2.  //4.
    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default TimerFun;