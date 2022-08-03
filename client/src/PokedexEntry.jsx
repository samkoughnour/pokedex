import React, { useState, useEffect } from "react"
import "./PokedexEntry.css"

function PokedexEntry({id , pokemonName}){
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png"
    const [currentPokemon, setCurrentPokemon] = useState(null)
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res)=>res.json())
            .then((data)=> setCurrentPokemon(data))
    },([]))

    return(
        <div className="pokedexEntry">
            <div className="pokedexDiv">
                <img src={imageUrl} alt=""/>
                <p>{pokemonName} </p>
                <p className="type">{currentPokemon?.types.map(({ type })=>{
                    return(type.name + " ")
                })}</p>
            </div>
        </div>
    )
}

export default PokedexEntry