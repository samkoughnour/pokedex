import React from "react"
import "./Header.css"




function Header({handleChange}){
    return (<div className="Header">
        <h1>Nour's Pokedex</h1>
        <input onChange={event => handleChange(event)}></input>
    </div>)

}

export default Header