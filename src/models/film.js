const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({

    title: {
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
    trailer_url: {
        type: String,
        required: true,
        minlength: 5,
        maxlenght: 1000
    },
    launch_year: {
        type: Number,
        required: true,
        maxlength: 4
    }
});

const Film = mongoose.model('film', filmSchema);


module.exports = Film;