import React, { Component } from 'react';

class Timer extends Component {
    //1.
    constructor(props){
        super(props);

        this.state={
            time: new Date()
        }
    }

    tick = () => {
        console.log('tick');
        this.setState({
            time: new Date()
        })
    }

    //3.
    componentDidMount = () => {
        console.log("componentDidMount");
        setInterval(() => this.tick(),1000)
    }

    //5.
    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.time !== prevState.time) {
            console.log('update');
        }
    }

    //6.
    componentWillUnmount = () => {
        console.log('componentWillUnmount');
        clearInterval(this.Timer)
    }

    //2.  //4.
    render() {
        return (
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Timer;