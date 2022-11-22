const { Router } = require("express");
const router = Router();
const multerDocument = require("../../utils/multer/document");
const createDocumentController = require("../../controllers/api/document/create/create");
const deleteDocumentController = require("../../controllers/api/document/delete");
const getAllDocumentController = require("../../controllers/api/document/getAll");
const getDocumentByCourseIdController = require("../../controllers/api/document/getByCourse");
const {
  verifyCreateFields,
} = require("../../controllers/api/document/create/verifyFields");

router.get("/:course_id/course", getDocumentByCourseIdController);
router.get("/", getAllDocumentController);
router.post(
  "/",
  verifyCreateFields,
  multerDocument.single("document"),
  createDocumentController
);
router.delete("/:document_id", deleteDocumentController);

module.exports = router;
