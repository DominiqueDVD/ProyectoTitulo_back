const mysql = require("../../../config/mysql");

const createDocumentService = (name, description, link, course_id) =>
  mysql.promise().execute(
    `INSERT INTO document (name, description, link, course_id)
     VALUES (?, ?, ?, ?)`,
    [name, description, link, course_id]
  );

module.exports = createDocumentService;
