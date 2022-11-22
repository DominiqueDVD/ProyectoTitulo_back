const createExamService = require("../../../../services/database/exam/create");

const createExamController = async (req, res) => {
  try {
    const link = req.wholeFileName;
    if (!link)
      return res.status(400).json({
        err: true,
        message: "You must upload a file",
      });
    const { name, course_id, num_of_questions } = req.query;
    await createExamService(name, link, course_id, num_of_questions);
    const message = `Exam created succesfully!`;
    console.log(message);
    return res.status(201).json({
      link,
      message,
      err: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      link: null,
      err: true,
      message: err.message,
    });
  }
};

module.exports = createExamController;
