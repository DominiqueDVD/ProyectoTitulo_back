const mysql = require("../../../config/mysql");

const updateStudent = (student_id, name, rut, password) =>
  mysql.promise().execute(
    `UPDATE student
     SET name = ?, rut = ?, passwd = ?
     WHERE student_id = ?`,
    [name, rut, password, student_id]
  );

module.exports = updateStudent;
