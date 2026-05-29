const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const feedRoutes = require('./routes/feed');
const app = express();
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use('/Images',express.static(path.join(__dirname,'Images')));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
app.use((error,req,res,next)=>{
    console.log(error);
    const status = err.statusCode || 500;
    const message = error.message;
    res.status(status).json({message : message});
});

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('MongoDB Connected');

    app.listen(8080, () => {
        console.log('Server running on port 8080');
    });
})
.catch(err => {
    console.log(err);
});
