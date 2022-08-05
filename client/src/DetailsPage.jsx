import React, {useEffect, useState} from "react"
import Header from "./Header"
import {useLocation} from "react-router-dom"
import "./DetailsPage.css"

function DetailsPage() {
    const location = useLocation()
    const currentPokemon = location.state
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ currentPokemon.id +".png"
    const abilities = currentPokemon.abilities.map((abilities)=>{
        return(abilities.ability.name)
    })
    console.log(abilities)

    return(
        <div>
            <Header/>
                    <p>{currentPokemon.name}</p>
                    <img className="detailPage" src={imageUrl} alt=""/>
                    <p className="details">Types: {currentPokemon?.types.map(({ type })=>{
                            return(type.name + " ")
                    })}</p>
                    <p className="details">Abilities: {abilities.map((ability)=>{
                        return(ability+", ")
                    })}</p>
        </div>
    )
}

export default DetailsPage;