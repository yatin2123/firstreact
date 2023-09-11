import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    const [countryName, setCountryName] = useState('India');

    const changeCountry = () => {
        setCountryName('Uk')
    }
    return (
        <div>
            <h1>Country based component</h1>
            <h1>Country: {countryName}</h1>
            <button onClick={changeCountry}>changeCountry</button>
            <CityFun country_name = {countryName}/>
        </div>
    );
}

export default CountryFun;