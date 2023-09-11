import React from 'react';

function CityFun(props) {
    return (
        <div>
            <h1>City function based componrnt</h1>
            <h1>Country: {props.country_name}</h1>
            <h3>City Name:{props.country_name === 'India'? 'Surat': 'London'} </h3>
        </div>
    );
}

export default CityFun;