const express = require("express");
const cors = require("cors");
// const Sequelize = require("sequelize");

const app = express();

// const sequelize = new Sequelize("sqlite:chinook.db");

const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/api", AppRouter);
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
