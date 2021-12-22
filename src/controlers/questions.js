const Question = require('../models/questions');

class QuestionController {
    static get(req, res, next){
        const question = new Question();
        question.get(req.params.answer)
        .then(() => res.json(question))
    }
}

module.exports = QuestionController;