const mysql = require("../../../config/mysql");

const rateExamService = (score, studentExam_id) =>
  mysql.promise().execute(
    `UPDATE studentExam
     SET score = ?, is_pendient=0 
     WHERE studentExam_id = ?`,
    [score, studentExam_id]
  );

module.exports = rateExamService;
