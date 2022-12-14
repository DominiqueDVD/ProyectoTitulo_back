const mysql = require("../../../config/mysql");

const updateStudentWithPasswordService = (student_id, name, lastname, rut, password) =>
  mysql.promise().execute(
    `UPDATE student
     SET name = ?, lastname = ?, rut = ?, passwd = ?
     WHERE student_id = ?`,
    [name, lastname, rut, password, student_id]
  );

const updateStudentWithoutPasswordService = (student_id, name, lastname, rut) =>
  mysql.promise().execute(
    `UPDATE student
     SET name = ?, lastname = ?, rut = ?
     WHERE student_id = ?`,
    [name, lastname, rut, student_id]
  );

module.exports = {
  updateStudentWithPasswordService,
  updateStudentWithoutPasswordService,
};
