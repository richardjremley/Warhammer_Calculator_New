const router = require("express").Router();
const controller = require("../controllers/DefendController");
router.get("shotsTest", controller.getShotsNumber);
router.get("/", controller.GetDefender);
router.get("/shots", controller.getHits);
router.get("/t2", controller.GetDefender2);
router.get("/t3", controller.GetAttacker2);
router.get("/hits", controller.getHits);
router.get("/solution", controller.GetSolution2);

router.get("/wounds", controller.getWounds);
router.get("/unsaved", controller.getUnsavedWounds);
router.get("/:defender_id", controller.GetDefenderPK);
router.get("/attack/:attacker_id", controller.GetAttackerById2);
router.put("/:defender_id", controller.updateDefender);
module.exports = router;
