const express = require('express');
const mongoose = require('mongoose');
const filmRouter = require('./routes/film');
const characterRouter = require('./routes/character');

const app = express();
app.use(express.json());

const port = 3000;

app.use('/films', filmRouter);
app.use('/characters', characterRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    mongoose.connect('mongodb+srv://diegochruscinski:7OKkxyPxeAn26srN@iceage-api.d8muzci.mongodb.net/?retryWrites=true&w=majority');
});
