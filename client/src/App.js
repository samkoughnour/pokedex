import './App.css';
import Header from "./Header"
import PokedexEntry from './PokedexEntry';
import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Outlet} from "react-router-dom"

function App() {
  const [pokemon, setPokemon] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const fetchPokemon = async () =>{
      const data = await axios.get("/pokemon")
      setPokemon(data.data.results)
    }
    fetchPokemon()
  },[])

  function handleChange(event){
    setSearchInput(event.target.value)
  }

  return (
    <div className="App">
      <Header handleChange={handleChange}/>
      {pokemon.filter(poke => poke.name.startsWith(searchInput)).map((filteredPokemon, index)=>{
        return(<PokedexEntry key={index} id={filteredPokemon.url.slice(34,filteredPokemon.url.length-1)} pokemonName={filteredPokemon.name} />)
      })} 
      <Outlet/>
    </div>
  );
}

export default App;
