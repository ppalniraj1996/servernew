const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const cors = require("cors");
const { RedRoute } = require("./Route/Routersurl");
const { UrlRouter } = require("./Route/UrlRoute");


const server = require("http").Server(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors
app.use(
  cors({
    origin: true,
    credentials: true,
    sameSite: "none",
    optionSuccessStatus: 200,
  })
);

app.get("/", (req, res) => {
  res.send("mock-12");
});
app.use("/generate", UrlRouter);
app.use("/", RedRoute);

//connection
const PORT = process.env.PORT;
const mongoDB = process.env.Connection;

app.listen(PORT, () => {
  mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Server is Started");
    })
    .catch((err) => {
      console.log("Falied  Connection");
    });
  console.log(`server started on port ${PORT}`);
});
