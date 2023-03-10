const getAllCourseByIdService = require("../../../services/database/course/getById");

const getCourseByIdController = async (req, res) => {
  try {
    const { course_id } = req.params;
    if (!course_id)
      return res.status(400).json({
        err: true,
        data: [],
        message: "You must provide `course_id` param",
      });
    if (isNaN(parseInt(course_id)))
      return res.status(400).json({
        err: true,
        data: [],
        message: "`course_id` param must be a number",
      });
    const [coursesFound] = await getAllCourseByIdService(course_id);
    return res.status(200).json({
      err: false,
      data: coursesFound,
      message: "Courses found succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      data: [],
      message: err.message,
    });
  }
};

module.exports = getCourseByIdController;