const express = require('express');
const cors = require('cors');
const Questions = require('../models/questions');
const routs = require('../routes');

module.exports = () => {
    const app = express();
    Questions.init();
    app.use(express.json());
    app.use(cors());
    app.use(routs);

    return app;
}