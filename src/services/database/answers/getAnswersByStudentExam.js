const mysql = require("../../../config/mysql");

const getAnswersByStudentExam = (studentExam_id) =>
  mysql.promise().execute(
    `SELECT * FROM answer
     WHERE studentExam_id = ?`,
    [studentExam_id]
  );

module.exports = getAnswersByStudentExam;
