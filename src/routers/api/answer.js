const { Router } = require("express");
const router = Router();
const sendAnswerController = require("../../controllers/api/answer/create");
const getAllAnswersController = require("../../controllers/api/answer/getAllAnswers");
const getAllExamsPendientController = require("../../controllers/api/answer/getAllExamsPendient");
const getAllEnrollmentExamController = require("../../controllers/api/answer/getAllEnrollmentExam");
const getAnswersByStudentExamController = require("../../controllers/api/answer/getAnswersByStudentExam");
const { isStudent } = require("../../middlewares/isStudent");

router.get("/:studentExam_id", getAnswersByStudentExamController);
router.get("/:course_id/exam", getAllExamsPendientController);
router.get("/all", getAllAnswersController);
router.get("/", getAllEnrollmentExamController);
router.post("/", isStudent, sendAnswerController);

module.exports = router;
