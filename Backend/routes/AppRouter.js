const router = require("express").Router();
const AttackerRouter = require("./AttackerRoute");
const DefenderRouter = require("./DefenderRoute");
const SolutionRouter = require("./SolutionRoute");
router.get("/", (req, res) => res.send("This is root!"));
router.use("/attack", AttackerRouter);
router.use("/defend", DefenderRouter);
router.use("/solution", SolutionRouter);
module.exports = router;
