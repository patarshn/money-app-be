const  express =  require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const { validate } = require("../services/AuthService");

router.use(validate)
router.get("/", UserController.getUsers)
.post("/", UserController.addUser)
.get("/:userId", UserController.getUser)
.put("/:userId", UserController.updateUser)
.delete("/:userId", UserController.deleteUser);

module.exports = router;
