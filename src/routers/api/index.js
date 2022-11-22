const { Router } = require("express");
const router = Router();
const adminRouter = require("./admin");
const teacherRouter = require("./teacher");
const studentRouter = require("./student");
const courseRouter = require("./course");
const documentRouter = require("./document");
const examRouter = require("./exam");
const { isRoot } = require("../../middlewares/isRoot");
const { isAdmin } = require("../../middlewares/isAdmin");
const { isTeacher } = require("../../middlewares/isTeacher");

router.use("/admin", isRoot, adminRouter);
router.use("/teacher", isAdmin, teacherRouter);
router.use("/student", isAdmin, studentRouter);
router.use("/course", isTeacher, courseRouter);
router.use("/document", isTeacher, documentRouter);
router.use("/exam", isTeacher, examRouter);

module.exports = router;
