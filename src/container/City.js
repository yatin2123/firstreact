
import React, {Component} from "react";

class City extends Component{
    render(){
        return(
            <div>
                <h1>City Component</h1>
                <h3>Country: {this.props.Country_Name}</h3>
                <h3>City Name:{this.props.Country_Name === 'India'? 'Surat': 'London'} </h3>
            </div>
        )
    }
}
export default City;