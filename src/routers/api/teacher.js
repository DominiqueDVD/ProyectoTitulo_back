const { Router } = require("express");
const router = Router();
const getAllTeacherController = require("../../controllers/api/teacher/getAll");
const createTeacherController = require("../../controllers/api/teacher/create");
const updateTeacherController = require("../../controllers/api/teacher/update");
const deleteTeacherController = require("../../controllers/api/teacher/delete");
const { existsEmailAdmin } = require("../../middlewares/existsAdminEmail");
const { encryptPassword } = require("../../middlewares/encryptPassword");
const { isAdmin } = require("../../middlewares/isAdmin");
const { isTeacherOrAdmin } = require("../../middlewares/isTeacherOrAdmin");

router.get("/", isTeacherOrAdmin, getAllTeacherController);
router.post(
  "/",
  isAdmin,
  existsEmailAdmin,
  encryptPassword,
  createTeacherController
);
router.put("/:teacher_id", isAdmin, updateTeacherController);
router.delete("/:teacher_id", isAdmin, deleteTeacherController);

module.exports = router;
