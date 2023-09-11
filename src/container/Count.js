import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countName: 0
        }
    }

    handleincrement = (countName) => {
        if(this.state.countName < 5){
            this.setState({
                countName: this.state.countName + 1
            })
        }
        


    }

    handledcrement = () => {
        this.setState({
            countName: this.state.countName - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleincrement}>+</button>
                {this.state.countName}
                <button onClick={this.handledcrement}>-</button>
            </div>
        );
    }
}

export default Count;