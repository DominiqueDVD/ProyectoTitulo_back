const { Router } = require("express");
const router = Router();
const getAllTeacherController = require("../../controllers/api/teacher/getAll");
const createTeacherController = require("../../controllers/api/teacher/create");
const updateTeacherController = require("../../controllers/api/teacher/update");
const deleteTeacherController = require("../../controllers/api/teacher/delete");
const { existsEmailAdmin } = require("../../middlewares/existsAdminEmail");
const { encryptPassword } = require("../../middlewares/encryptPassword");

router.get("/", getAllTeacherController);
router.post("/", existsEmailAdmin, encryptPassword, createTeacherController);
router.put("/:teacher_id", updateTeacherController);
router.delete("/:teacher_id", deleteTeacherController);

module.exports = router;
