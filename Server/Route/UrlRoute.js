
const { Router } = require("express");
const { CreateShortUrl } = require("../controller/UrlController");
const UrlRouter = Router();

UrlRouter.post("/urlshort", async (req, res) => {
  const { orginalUrl } = req.body;
  // console.log(orginalUrl);
  const { message, status, data } = await CreateShortUrl(orginalUrl);
  
  if (status == "error") {
    return res.status(500).send({ message, status });
  } else if (status === "success") {
    return res.status(200).send({ message, status, data });
  } else {
    return res.status(200).send({ message, status, data });
  }
});
module.exports = { UrlRouter };
