const { Router } = require("express");
const router = Router();
const foundRole = require("../controllers/auth/signup/foundRole");
const comparePassword = require("../controllers/auth/signup/password");
const authentication = require("../controllers/auth/signup/jwt");

router.post("/", foundRole, comparePassword, authentication);

module.exports = router;
