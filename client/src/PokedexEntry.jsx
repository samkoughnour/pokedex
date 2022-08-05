import React, { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import "./PokedexEntry.css"

function PokedexEntry({id , pokemonName}){
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png"
    const detailLink = "/pokemon/"+pokemonName
    const [currentPokemon, setCurrentPokemon] = useState(null)
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res)=>res.json())
            .then((data)=> setCurrentPokemon(data))
    },)

    return(
        <div className="pokedexEntry">
            <div className="pokedexDiv">
                <img src={imageUrl} alt=""/>
                <p className="name">{pokemonName} </p>
                <p>{currentPokemon?.types.map(({ type })=>{
                    return(type.name + " ")
                })}</p>
                <Link to={detailLink}>{currentPokemon?.types.map(({ type })=>{
                    return(type.name + " ")
                })}</Link>
                <Outlet />
            </div>
        </div>
    )
}

export default PokedexEntry