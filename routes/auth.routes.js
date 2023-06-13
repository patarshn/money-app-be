const  express =  require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const { validate } = require("../services/AuthService");

router.get("/profile", validate, AuthController.profile)
.post("/login", AuthController.login)

module.exports = router;
