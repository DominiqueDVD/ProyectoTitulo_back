const mysql = require("../../../config/mysql");

const getStudentByCourseIdService = () =>
  mysql.promise().execute(`SELECT * FROM student`);

module.exports = getStudentByCourseIdService;
