import React from 'react';

const Country = (props) => {
    const {name,population,region,flag} = props.country;
    
    return (
        <div>
            <h1>This is: {name}</h1>
            <h2>This Country Population is: {population}</h2>
            <h2><small>This is in : {region} Region</small></h2>
            <h1 height="20px" width="20px">Flag: <img src={flag} alt="" /></h1>
        </div>
    );
};

export default Country;