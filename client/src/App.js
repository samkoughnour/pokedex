import './App.css';
import Header from "./Header"
import PokedexEntry from './PokedexEntry';
import React, {useState, useEffect} from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res)=> res.json())
      .then((data) => setPokemon(data.results))
  },[])

  function handleChange(event){
    setSearchInput(event.target.value)
  }

  return (
    <div className="App">
      <Header handleChange={handleChange}/>
      {pokemon.filter(poke => poke.name.startsWith(searchInput)).map((filteredPokemon)=>{
        return(<PokedexEntry id={filteredPokemon.url.slice(34,filteredPokemon.url.length-1)} pokemonName={filteredPokemon.name} />)
      })} 
    </div>
  );
}

export default App;
