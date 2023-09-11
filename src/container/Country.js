import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props){
        super(props);

        this.state = {
            countryName: 'India'
        }

    }

    changeCountry = () => {
        this.setState({
            countryName: 'Uk'
        })
    }

    render() {
        return (
            <div>
                <h1>Country Component</h1>
                <h2>Our Country is:{ this.state.countryName}</h2>
                <button onClick={this.changeCountry}>changeCountry</button>
                <City Country_Name = {this.state.countryName}/>
            </div>
        );
    }
}

export default Country;