const router = require("express").Router();
const controller = require("../controllers/AttackController");
router.get("/test", controller.GetAttacker);

module.exports = router;
