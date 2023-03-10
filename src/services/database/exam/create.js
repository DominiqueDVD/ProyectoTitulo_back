const mysql = require("../../../config/mysql");

const createExamService = (
  name,
  description,
  link,
  course_id,
  num_of_questions,
  max_score, 
  
) =>
  mysql.promise().execute(
    `INSERT INTO exam (name, description, link, course_id, num_of_questions, max_score)
    VALUES (?, ?, ?, ?, ?, ?)`,
   [name, description, link, course_id, num_of_questions, max_score]
  );

module.exports = createExamService;
