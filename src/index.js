const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const customerRoutes = require("./routes/customers.route");
const app = express();

app.use(cors());
app.use(customerRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({ message: "My naevis we love you!" });
});

const PORT = process.env.PORT || 9000;

module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
