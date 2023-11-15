const { connection } = require("../configs/db.config");

const getData = (tableName, condition) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${tableName} ${condition ? condition : ";"}`,
      (err, result) => {
        if (err) throw reject(err);
        resolve(result);
      }
    );
  });
};

const getDataById = (tableName, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${tableName} WHERE id=${id}`,
      (err, result) => {
        if (err) throw reject(err);
        resolve(result);
      }
    );
  });
};
const getAnswersByCondition = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT  question.content as question_content, answer.content as answer_content, CAST(answer.is_answer as float) as isTrue FROM question inner join answer on answer.question_id = question.id WHERE question.id=${id}`,
      (err, result) => {
        if (err) throw reject(err);
        resolve(result);
      }
    );
  });
};

const insertData = (tableName, data) => {
  const keys = Object.keys(data[0]).join();
  const values = data.map((item) => Object.values(item).join()).join();

  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO ${tableName} (${keys}) VALUES ${values})`,
      (err, result) => {
        if (err) throw reject(err);
        reject(result);
      }
    );
  });
};

module.exports = { getData, getDataById, getAnswersByCondition };
