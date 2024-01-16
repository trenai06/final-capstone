const Pool = require('pg').Pool
const pool = new Pool({
    user:'cbreaux2',
    host:'localhost',
    database:'musicfest', 
    password: 'wildrice',
    port: 5432
})

const getArtists = (req, res) => {
    pool.query('SELECT * FROM artists', (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getArtistById = (req, res) => {
    const id = req.params.id
    pool.query('SELECT * FROM artists WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows[0])
    })
}

const getVideo = (req, res) => {
    const id = req.params.id
    pool.query('SELECT video FROM artists WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows[0])
    })
}



module.exports = {
    getArtists, 
    getArtistById,
    getVideo,
}