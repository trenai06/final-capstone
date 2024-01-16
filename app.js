const express = require('express')
const path = require('path')
const queries = require('./queries')
const app = express()

app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, ("public/html/turntable.html")))
})

app.get("/artist", (req, res) => {
    res.sendFile(path.join(__dirname, ("public/html/headphones.html")))
})

app.get("/artists", queries.getArtists)

app.get("/artists/:id", queries.getArtistById)

app.get("/video/:id", queries.getVideo)

app.listen(3000)

console.log("Express is running!")