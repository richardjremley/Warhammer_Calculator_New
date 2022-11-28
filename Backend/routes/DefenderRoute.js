const router = require("express").Router();
const controller = require("../controllers/DefendController");
router.get("/t", controller.GetDefender);
module.exports = router;
