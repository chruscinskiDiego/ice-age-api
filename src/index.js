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
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ice_age');
});
