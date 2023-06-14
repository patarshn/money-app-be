const  express =  require("express");
const router = express.Router();
const FinanceController = require("../controllers/finance.controller");
const { validate } = require("../services/AuthService");

router.use(validate)
router.get("/", FinanceController.getFinances)
.post("/", FinanceController.addFinance)
.get("/:financeId", FinanceController.getFinance)
.put("/:financeId", FinanceController.updateFinance)
.delete("/:financeId", FinanceController.deleteFinance);

module.exports = router;
