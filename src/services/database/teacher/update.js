const mysql = require("../../../config/mysql");

const updateTeacher = (teacher_id, name, rut, password) =>
  mysql.promise().execute(
    `UPDATE teacher
     SET name = ?, rut = ?, passwd = ?
     WHERE teacher_id = ?`,
    [name, rut, password, teacher_id]
  );

module.exports = updateTeacher;
