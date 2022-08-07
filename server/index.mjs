import fetch from "node-fetch"
import express from "express"
import axios from "axios"


const PORT = process.env.PORT || `3001`;

const app = express();


app.get("/pokemon", async function(req,res){
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
  const pokemon = response.data
  res.send(pokemon)
})

app.get("/pokemon/:pokemonName", async function(req,res){
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+req.params.pokemonName)
  res.send(response.data)
})

app.get("/api", function(req, res){
  res.send("Penisthousand")
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});