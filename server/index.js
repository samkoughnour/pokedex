const express = require("express");
const https = require("https")

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", function(req,res){
    res.json({message:"Hello"})
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});