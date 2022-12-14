const mysql = require("../../../config/mysql");

const getNotStudentByCourseService = (course_id) =>
    mysql.promise().execute(
        `SELECT 
      student.student_id,
      student.email,
      student.name,
      student.rut
      FROM student
      WHERE student.student_id NOT IN (
      SELECT s.student_id FROM student s 
      LEFT JOIN enrollment e ON s.student_id = e.student_id 
      WHERE e.course_id = '?')`,
        [course_id]
    );

module.exports = getNotStudentByCourseService;
