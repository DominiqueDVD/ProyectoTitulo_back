const { Router } = require("express");
const router = Router();
const getAllExamsPendientController = require("../../controllers/api/answer/getAllExamsPendient");
const getAllEnrollmentExamController = require("../../controllers/api/answer/getAllEnrollmentExam");
const updateAnswerController = require("../../controllers/api/answer/updateAnswer");
const rateExamController = require("../../controllers/api/answer/rateExam");
const getAnswersByStudentExamController = require("../../controllers/api/answer/getAnswersByStudentExam");
const deleteEnrollToExamController = require("../../controllers/api/answer/deleteEnrollToExam");
const { isStudent } = require("../../middlewares/isStudent");
const verifyFields = require("../../controllers/api/answer/create/verifyFields");
const isAlreadyRate = require("../../controllers/api/answer/create/isAlreadyRate");
const numberOfAnswers = require("../../controllers/api/answer/create/numberOfAnswers");
const enrollToExam = require("../../controllers/api/answer/create/enrollToExam");
const createAnswers = require("../../controllers/api/answer/create/createAnswers");

router.get("/:studentExam_id", getAnswersByStudentExamController);
router.get("/:course_id/exam", getAllExamsPendientController);
router.get("/", getAllEnrollmentExamController);

const sendAnswerController = [
  verifyFields,
  isAlreadyRate,
  numberOfAnswers,
  enrollToExam,
  createAnswers,
];
router.post("/", isStudent, sendAnswerController);
router.post("/rate-exam", rateExamController);
router.put("/", updateAnswerController);
router.delete("/:studentExam_id", deleteEnrollToExamController);

module.exports = router;
