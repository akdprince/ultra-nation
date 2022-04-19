import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries]= useState([]);
  useEffect(()=> {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    })
    .catch(error => console.log(error));
  }, [])
  const handleAddCountry = (country) => {
    console.log(country)
  };
  return (
    <div className="App">
      <h2>Country loaded: {countries.length}</h2>
      <h2>Country Added: </h2>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
