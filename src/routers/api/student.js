const { Router } = require("express");
const router = Router();

const createStudentController = require("../../controllers/api/student/create");
const { existsEmailAdmin } = require("../../middlewares/existsAdminEmail");
const { existsTeacherEmail } = require("../../middlewares/existsTeacherEmail");
const { encryptPassword } = require("../../middlewares/encryptPassword");
const getStudentByCourseController = require("../../controllers/api/student/getByCourse");
const getAllStudentController = require("../../controllers/api/student/getAll");
const updateStudentController = require("../../controllers/api/student/update");
const deleteStudentController = require("../../controllers/api/student/delete");
const { isAdmin } = require("../../middlewares/isAdmin");
const { isStudent } = require("../../middlewares/isStudent");
const { isTeacherOrAdmin } = require("../../middlewares/isTeacherOrAdmin");

router.get("/courseByStudent", isStudent, getStudentByCourseController);
router.get("/", isTeacherOrAdmin, getAllStudentController);
router.post(
  "/",
  isAdmin,
  existsEmailAdmin,
  existsTeacherEmail,
  encryptPassword,
  createStudentController
);
router.put("/:student_id", isAdmin, updateStudentController);
router.delete("/:student_id", isAdmin, deleteStudentController);

module.exports = router;