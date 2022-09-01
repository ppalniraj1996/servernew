
const { Router } = require("express");
const { UrlRedir } = require("../controller/UrlRedirected");
const RedRoute = Router();

RedRoute.get("/:urlid", async (req, res) => {
  const { urlid } = req.params;
//  console.log(urlid);

  const { message, status, data } = await UrlRedir(urlid);

  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "success") {
    return res.redirect(data);
  } else {
    return res.status(200).send({ message, status, data });
  }
});

module.exports = { RedRoute };
