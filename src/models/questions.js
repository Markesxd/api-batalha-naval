const db = require('../database/connection');

class Question {

    constructor(question){
        const keys = Object.keys(question = {});
        keys.forEach(key => this[key] = question[key]);
    }

    static init(){
        const sql = `CREATE TABLE IF NOT EXISTS questions(
            id int AUTO_INCREMENT,
            content text NOT NULL,
            dificulty int NOT NULL,
            subject varchar(20) NOT NULL,
            answer varchar(5) NOT NULL,
            PRIMARY KEY (id)
        )`

        db.query(sql, (err, result) => {
            if(err){
                console.log(err);
                throw err;
            } else {
                console.log('Tables created sucessfuly');
            }
        })

        return
    }

    save(){
        const sql = `INSERT INTO questions set ?`;
        db.query(sql, this, (err, result) => {
            if(err){
                console.log(err);
                throw err;
            } else {
                console.log(result);
            }
        })
    }

    async get(answer){

        return new Promise((resolve, reject) => {
            const sql = `SELECT * from questions where answer='${answer}'`;
            db.query(sql, (err, result) => {
                if(err){
                    reject(err);
                } else {
                    const selected = parseInt(Math.random() * result.length);
                    this.content = result[selected].content;
                    this.answer = answer;
                    resolve();
                }
            });
        })
    }
}

module.exports = Question;