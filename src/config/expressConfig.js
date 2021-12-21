const express = require('express');
const cors = require('cors');
const Questions = require('../models/questions');

module.exports = () => {
    const app = express();
    Questions.init();
    app.use(express.json());
    app.use(cors);

    return app;
}