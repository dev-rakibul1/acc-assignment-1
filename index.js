const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.route");

require("dotenv").config();
const port = process.env.PORT || 5000;

// middle wire
app.use(express.json());
app.use(cors());

// router calling
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Congratulation from our server!");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "route not found!!" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
