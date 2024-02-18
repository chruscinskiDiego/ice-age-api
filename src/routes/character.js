const express = require('express');
const router = express.Router();
const Character = require('../models/character');

//GET
router.get('/', async (req, res) => {
    const characters = await Character.find();
    return res.send(characters);
});

router.get('/:id', async (req, res) => {
    const character = await Character.findById(req.params.id);
    return res.send(character);
});

//POST
router.post('/', async (req, res) => {
    try{
        const character = new Character({
            name: req.body.name,
            description: req.body.description,
            species: req.body.species
        });
        await character.save();
        return res.send(character);
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
    const character = await Character.findByIdAndDelete(req.params.id);
    return res.send(character);
});

//PUT
router.put('/:id', async (req, res) => {
    try{
        const character = await Character.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.send(character);
    }
    catch(error){
        if(error.name === 'ValidationError'){
            return res.status(400).send(error.message);
        }
        return res.status(500).send('Internal Server Error');
    }
});

module.exports = router;