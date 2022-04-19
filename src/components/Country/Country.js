import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,region,flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    
    return (
        <div className='country'>
            <h1>This is: {name}</h1>
            <h2>This Country Population is: {population}</h2>
            <h2><small>This is in : {region} Region</small></h2>
            <h3>Flag: <img style={{height:"80px"}} src={flag} alt="" /></h3>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            
        </div>
    );
};

export default Country;