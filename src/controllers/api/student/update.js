const updateStudentService = require("../../../services/database/student/update");
const { createHash } = require("../../../utils/bcrypt");

const updateStudentController = async (req, res) => {
  try {
    const { student_id } = req.params;
    const { name, rut, password } = req.body;
    if (!student_id || !name || !rut || !password)
      return res.status(200).json({
        err: true,
        message: "You must provide all the necessary fields",
      });
    await updateStudentService(student_id, name, rut, createHash(password));
    const message = `Student with id=${student_id} was updated succesfully!`;
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

module.exports = updateStudentController;
