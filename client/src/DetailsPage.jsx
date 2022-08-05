import React, {useState} from "react"
import Header from "./Header"
import {useParams} from "react-router-dom"

function DetailsPage() {
    const params = useParams();
    const pokemonName = params.pokemonName
    const [currentPokemon, setCurrentPokemon] = useState(null)
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ currentPokemon.id +".png"
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res)=>res.json())
        .then((data)=> setCurrentPokemon(data))

    return(
        <div>
            <Header/>
            {/* <p>{pokemonName}</p>
            <img url={imageUrl} alt=""/>
            <p>{currentPokemon?.types.map(({ type })=>{
                    return(type.name + " ")
            })}</p>
            <p>{currentPokemon?.abilities.map(({ abilities })=>{
                    return(abilities.name + " ")
            })}</p> */}
        </div>
    )
}

export default DetailsPage