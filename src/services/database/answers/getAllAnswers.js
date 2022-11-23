const mysql = require("../../../config/mysql");

const getAllAnswersService = () =>
  mysql.promise().execute(`SELECT * FROM answer;`);

module.exports = getAllAnswersService;
