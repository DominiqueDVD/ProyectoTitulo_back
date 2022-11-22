const { Router } = require("express");
const router = Router();

const createStudentController = require("../../controllers/api/student/create");
const { existsEmailAdmin } = require("../../middlewares/existsAdminEmail");
const { existsTeacherEmail } = require("../../middlewares/existsTeacherEmail");
const { encryptPassword } = require("../../middlewares/encryptPassword");
const getAllStudentController = require("../../controllers/api/student/getAll");
const updateStudentController = require("../../controllers/api/student/update");
const deleteStudentController = require("../../controllers/api/student/delete");

router.get("/", getAllStudentController);
router.post(
  "/",
  existsEmailAdmin,
  existsTeacherEmail,
  encryptPassword,
  createStudentController
);
router.put("/:student_id", updateStudentController);
router.delete("/:student_id", deleteStudentController);

module.exports = router;
