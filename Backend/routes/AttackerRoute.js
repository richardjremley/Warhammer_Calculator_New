const router = require("express").Router();
const controller = require("../controllers/AttackController");
router.get("/", controller.GetAttacker);
router.get("/:attacker_id", controller.GetAttackerById);
router.put("/:attacker_id", controller.updateAttacker);

module.exports = router;
