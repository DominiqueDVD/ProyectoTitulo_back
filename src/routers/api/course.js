const { Router } = require("express");
const router = Router();
const createCourseController = require("../../controllers/api/course/create");
const getAllCourseController = require("../../controllers/api/course/getAll");
const updateCourseController = require("../../controllers/api/course/update");
const deleteCourseController = require("../../controllers/api/course/delete");

router.get("/", getAllCourseController);
router.post("/", createCourseController);
router.put("/:course_id", updateCourseController);
router.delete("/:course_id", deleteCourseController);

module.exports = router;
