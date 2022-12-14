const mysql = require("../../../config/mysql");

const getAllStudent = () =>
  mysql
    .promise()
    .execute(`SELECT student_id, email, name, rut, rol, lastname FROM student`);

module.exports = getAllStudent;
