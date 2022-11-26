const studentEnrollToExamService = require("../../../../services/database/answers/studentEnrollToExamService");

const enrollToExam = async (req, res, next) => {
  try {
    const { exam_id } = req.body;
    const { student_id } = req.userPayload;
    const [dataSaved] = await studentEnrollToExamService(student_id, exam_id);
    req.studentExam_id = dataSaved?.insertId;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = enrollToExam;
