const getAllExamsPendientService = require("../../../services/database/answers/getAllExamsPendient");

const getAllExamsPendientController = async (req, res) => {
  try {
    const { course_id } = req.params;
    const [examsFound] = await getAllExamsPendientService(course_id);
    return res.status(200).json({
      err: true,
      data: examsFound,
      message: "Exams pendient found successfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getAllExamsPendientController;
