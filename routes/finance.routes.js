const  express =  require("express");
const router = express.Router();
const FinanceController = require("../controllers/finance.controller");
const { validate } = require("../helpers/GlobalHelper");


router.use(validate)
router.get("/", FinanceController.getFinances)
.get("/sum", FinanceController.getFinanceSum)
.post("/", FinanceController.addFinance)
.get("/:financeId", FinanceController.getFinance)
.put("/:financeId", FinanceController.updateFinance)
.delete("/:financeId", FinanceController.deleteFinance);

module.exports = router;
