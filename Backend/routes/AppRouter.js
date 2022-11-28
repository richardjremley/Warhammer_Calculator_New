const router = require("express").Router();
const AttackerRouter = require("./AttackerRoute");
const DefenderRouter = require("./DefenderRoute");
router.get("/", (req, res) => res.send("This is root!"));
router.use("/attack", AttackerRouter);
router.use("/defend", DefenderRouter);
module.exports = router;
