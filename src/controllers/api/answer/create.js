const getExamByIdService = require("../../../services/database/exam/getExamById");
const createAnswerService = require("../../../services/database/answers/create");
const studentEnrollToExamService = require("../../../services/database/answers/studentEnrollToExamService");
const getEnrollToExamByStudentAndExamService = require("../../../services/database/answers/getEnrollToExamByStudentAndExam");

const sendAnswerController = async (req, res) => {
  try {
    const { exam_id, answers } = req.body;
    let dataAnswers = JSON.parse(answers);
    if (!exam_id || !answers)
      return res.status(400).json({
        err: true,
        message: "You must provide a `exam_id` and `answers` fields",
      });
    if (isNaN(parseInt(exam_id)) || typeof dataAnswers !== "object")
      return res.status(400).json({
        err: true,
        message:
          "`exam_id` must be a number and `answers` must be an array parsed with JSON.stringify",
      });
    const [enrollExamData] = await getEnrollToExamByStudentAndExamService(
      req.userPayload?.student_id,
      exam_id
    );
    if (enrollExamData?.length !== 0)
      return res.status(400).json({
        err: true,
        message: "You already send answers to this exam",
      });
    const [examFound] = await getExamByIdService(exam_id);
    const { num_of_questions } = examFound?.[0];
    if (examFound?.length === 0)
      return res.status(400).json({
        err: true,
        message: `Not exist an exam with id = ${exam_id}`,
      });
    if (num_of_questions !== dataAnswers?.length)
      return res.status(400).json({
        err: true,
        message: `num_of_questions = ${num_of_questions} isn't equal to number of answers = ${dataAnswers?.length}`,
      });
    await studentEnrollToExamService(req.userPayload?.student_id, exam_id);
    const [enrollExamData2] = await getEnrollToExamByStudentAndExamService(
      req.userPayload?.student_id,
      exam_id
    );
    console.log(enrollExamData2);
    const { studentExam_id } = enrollExamData2?.[0];
    const answersPromises = dataAnswers?.map(({ question_id, answer_text }) =>
      createAnswerService(question_id, answer_text, studentExam_id)
    );
    await Promise.all(answersPromises);
    return res.status(200).json({
      err: false,
      message: "The answers was saved succesfully!",
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
