const mysql = require("../../../config/mysql");

const createTeacher = (email, name, lastname, rut, password) =>
  mysql.promise().execute(
    `INSERT INTO teacher (email, name, lastname, rut, passwd, rol, is_active)
     VALUES (?, ?, ?, ?, ?, 1, 1);`,
    [email, name, lastname, rut, password]
  );

module.exports = createTeacher;
