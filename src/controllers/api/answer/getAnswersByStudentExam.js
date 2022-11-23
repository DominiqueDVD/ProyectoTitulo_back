const getAnswersByStudentExamService = require("../../../services/database/answers/getAnswersByStudentExam");

const getAnswersByStudentExamController = async (req, res) => {
  try {
    const { studentExam_id } = req.params;
    const [answersFound] = await getAnswersByStudentExamService(studentExam_id);
    return res.status(200).json({
      err: false,
      data: answersFound,
      message: "Answers found succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getAnswersByStudentExamController;
