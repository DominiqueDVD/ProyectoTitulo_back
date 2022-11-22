const updateTeacherService = require("../../../services/database/teacher/update");
const { createHash } = require("../../../utils/bcrypt");

const updateTeacherController = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    const { name, rut, password } = req.body;
    if (!teacher_id || !name || !rut || !password)
      return res.status(200).json({
        err: true,
        message: "You must provide all the necessary fields",
      });
    await updateTeacherService(teacher_id, name, rut, createHash(password));
    const message = `Teacher with id=${teacher_id} was updated succesfully!`;
    console.log(message);
    return res.status(200).json({
      message,
      err: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = updateTeacherController;
