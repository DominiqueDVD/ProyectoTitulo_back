const mysql = require("../../../config/mysql");

const createStudent = (email, name, lastname, rut, password) =>
  mysql.promise().execute(
    `INSERT INTO student (email, name, lastname, rut, passwd, rol)
     VALUES (?, ?, ?, ?, ?, 2);`,
    [email, name, lastname, rut, password]
  );

module.exports = createStudent;
