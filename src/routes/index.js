const router = require('express').Router();
const QuestionController = require('../controlers/questions');

router.get('/question/:answer', QuestionController.get);

module.exports = router;