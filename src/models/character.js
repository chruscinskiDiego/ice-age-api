const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlenght: 50
    },
    description: {
        type: String,
        required: false,
        minlength: 5,
        maxlenght: 1000
    },
    species: {
        type: String,
        required: true,
        minlength: 3,
        maxlenght: 50
    }
});

const Character = mongoose.model('character', characterSchema);

module.exports = Character;