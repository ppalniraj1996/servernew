


const mongoose = require("mongoose")


const UrlSchema = new mongoose.Schema({
  Id: String,
  orginalUrl:String,
  shortUrl:String
});

const UrlRouter = mongoose.model("Url", UrlSchema);
module.exports = { UrlRouter };