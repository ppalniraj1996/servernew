// urlId=>Id
// orginalUrl=>longUrl;
// ShortUrlModel=>UrlRouter
// shorturl =>urlshort
//  validUrl=>correctUrl
//shortid=>id
//GenerateShortUrl =>CreateShortUrl
//baseUrl => Url
//RedirectedToMain =>UrlRedir
//RedirectRouter=>RedRoute
const { Router } = require("express");
const { UrlRedir } = require("../Controller/UrlRedirected");
const RedRoute = Router();

RedRoute.get("/:urlid", async (req, res) => {
  const { urlid } = req.params;
  console.log(urlid);

  const { message, status, data } = await RedRoute(urlid);

  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "success") {
    return res.redirect(data);
  } else {
    return res.status(200).send({ message, status, data });
  }
});

module.exports = { RedRoute };
