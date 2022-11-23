const getAllAnswersService = require("../../../services/database/answers/getAllAnswers");

const getAllAnswersController = async (req, res) => {
  try {
    const [answersFound] = await getAllAnswersService();
    return res.status(200).json({
      err: false,
      data: answersFound,
      message: "Answers found succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getAllAnswersController;
