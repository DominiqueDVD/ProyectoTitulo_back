const mysql = require("../../../config/mysql");

const getAllExamsPendient = (course_id) =>
  mysql.promise().execute(
    `SELECT * FROM studentExam
     JOIN exam ON studentExam.exam_id = exam.exam_id
     JOIN student ON studentExam.student_id = student.student_id
     WHERE exam.course_id = ?`,
    [course_id]
  );

module.exports = getAllExamsPendient;
