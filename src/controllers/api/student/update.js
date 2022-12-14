const {
  updateStudentWithPasswordService,
  updateStudentWithoutPasswordService,
} = require("../../../services/database/student/update");
const { createHash } = require("../../../utils/bcrypt");

const updateStudentController = async (req, res) => {
  try {
    const { student_id } = req.params;
    const { name, lastname, rut, password } = req.body;
    console.log(password);
    if (!student_id || !name || !rut || !lastname)
      return res.status(400).json({
        err: true,
        message: "`name`, `lastname`, `rut` and `student_id` are required",
      });
    if (password === undefined || password === "")
      await updateStudentWithoutPasswordService(student_id, name, lastname, rut);
    else
      updateStudentWithPasswordService(
        student_id,
        name,
        lastname,
        rut,
        createHash(password)
      );
    const message = `Student with id = ${student_id} was updated succesfully!`;
    console.log(message);
    return res.status(200).json({
      message,
      err: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = updateStudentController;
