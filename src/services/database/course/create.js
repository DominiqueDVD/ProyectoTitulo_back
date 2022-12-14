const mysql = require("../../../config/mysql");

const createCourse = (name, period, carrera, teacher_id) =>
  mysql.promise().execute(
    `INSERT INTO course (name, period, carrera, teacher_id)
      VALUES (?, ?, ?, ?);`,
    [name, period, carrera, teacher_id]
  );

module.exports = createCourse;
