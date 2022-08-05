import './App.css';
import Header from "./Header"
import PokedexEntry from './PokedexEntry';
import React, {useState, useEffect} from 'react'
import {Outlet, Link} from "react-router-dom"

function App() {
  const [pokemon, setPokemon] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then((res)=> res.json())
      .then((data) => setPokemon(data.results))
  },[])

  function handleChange(event){
    setSearchInput(event.target.value)
  }

  return (
    <div className="App">
      <Header handleChange={handleChange}/>
      <Link to="./Header">Test</Link>
      
      {pokemon.filter(poke => poke.name.startsWith(searchInput)).map((filteredPokemon, index)=>{
        return(<PokedexEntry key={index} id={filteredPokemon.url.slice(34,filteredPokemon.url.length-1)} pokemonName={filteredPokemon.name} />)
      })} 
      <Outlet/>
    </div>
  );
}

export default App;
