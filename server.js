const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 7000;
const expressJwt = require("express-jwt");

app.use(morgan("dev"));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/firehousedb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to the DB"))
  .catch(err => console.log(err));

app.use(`/auth`, require(`./routes/authRouter.js`));

app.use((err, req, res, next) => {
  console.error(err);

  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`server running on Port: ${PORT}............`);
});
