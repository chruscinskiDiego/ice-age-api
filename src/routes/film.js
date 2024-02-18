const express = require('express');
const router = express.Router();
const Film = require('../models/film');

//GET
router.get('/', async (req, res) => {
    const films = await Film.find();
    return res.send(films);
});

router.get('/:id', async (req, res) => {
    const film = await Film.findById(req.params.id);
    return res.send(film);
});

//POST
router.post('/', async (req, res) => {
    try{
        const film = new Film({
            title: req.body.title,
            description: req.body.description,
            trailer_url: req.body.trailer_url,
            launch_year: req.body.launch_year
        });
        await film.save();
        return res.send(film);
    }
    catch(error){
        if(error.name === 'ValidationError'){
            return res.status(400).send(error.message);
        }
        return res.status(500).send('Internal Server Error');
    }
});

//DELETE
router.delete('/:id', async (req, res) => {
    const film = await Film.findByIdAndDelete(req.params.id);
    return res.send(film);
});

//PUT
router.put('/:id', async (req, res) => {
    try{
        const film = await Film.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.send(film);
    }
    catch(error){
        if(error.name === 'ValidationError'){
            return res.status(400).send(error.message);
        }
        return res.status(500).send('Internal Server Error');
    }
});

module.exports = router;