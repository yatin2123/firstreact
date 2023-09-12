import React, { Component } from 'react';
import Lifi_cy from './Lifi_cy';


class Life_cy1 extends Component {


    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    componentDidMount(){
        console.log('componentDidMount');
    }

    increment(){
        this.setState({count: this.state.count+1})
    }
    render() {
        return (
            <div>
                <Lifi_cy number={this.state.count}  ></Lifi_cy>
                <button onClick={() => {this.increment()}}>Click me</button>
            </div>
        );
    }
}

export default Life_cy1;