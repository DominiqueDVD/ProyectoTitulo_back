const {
    updateTeacherWithPassword,
    updateTeacherWithoutPassword,
} = require("../../../services/database/teacher/update");
const {createHash} = require("../../../utils/bcrypt");

const updateTeacherController = async (req, res) => {
    try {
        const {teacher_id} = req.params;
        const {name, lastname, rut, password} = req.body;
        if (!teacher_id || !name || !lastname || !rut)
            return res.status(200).json({
                err: true,
                message: "`name`, `lastname`,`rut` and `password` are required",
            });
        if (password === undefined || password === "")
            await updateTeacherWithoutPassword(teacher_id, name, lastname, rut);
        else
            await updateTeacherWithPassword(
                teacher_id,
                name,
                lastname,
                rut,
                createHash(password)
            );
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
