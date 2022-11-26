const createAnswerService = require("../../../../services/database/answers/create");

const sendAnswerController = async (req, res) => {
  try {
    const dataAnswers = req.dataAnswers;
    const studentExam_id = req.studentExam_id;
    const answersPromises = dataAnswers?.map((el) =>
      createAnswerService(el?.question_id, el?.answer_text, studentExam_id)
    );
    await Promise.all(answersPromises);
    return res.status(200).json({
      err: false,
      message: "The answers was sent succesfully, thanks!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = sendAnswerController;
