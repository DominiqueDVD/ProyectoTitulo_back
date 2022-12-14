const createStudentService = require("../../../services/database/student/create");

const createStudentController = async (req, res) => {
  try {
    const { email, name, lastname, rut } = req.body;
    if (!name || !lastname, !rut)
      return res.status(200).json({
        err: true,
        message: "You must provide all request fields",
      });
    await createStudentService(email, name, lastname, rut, req.hashedPasswd);
    const message = `Student: ${name}, was created succesfully!`;
    console.log(message);
    return res.status(201).json({
      message,
      err: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = createStudentController;
