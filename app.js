const express = require('express')
const path = require('path')
// const player = new Tone.Player("file").toDestination();
// player.autostart = true; 

const app = express()

app.use(express.static(path.join(__dirname, "/public")))



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, ("public/html/turntable.html")))
})

app.get("/artist", (req, res) => {
    res.sendFile(path.join(__dirname, ("public/html/headphones.html")))
})

app.listen(3000)

console.log("Express is running!")