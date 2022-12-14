const mysql = require("../../../config/mysql");

const updateTeacherWithPassword = (teacher_id, name, lastname, rut, password) =>
  mysql.promise().execute(
    `UPDATE teacher
     SET name = ?, lastname = ?, rut = ?, passwd = ?
     WHERE teacher_id = ?`,
    [name, lastname, rut, password, teacher_id]
  );

const updateTeacherWithoutPassword = (teacher_id, name, lastname, rut) =>
  mysql.promise().execute(
    `UPDATE teacher
     SET name = ?, rut = ?
     WHERE teacher_id = ?`,
    [name, lastname, rut, teacher_id]
  );

module.exports = { updateTeacherWithoutPassword, updateTeacherWithPassword };
