// urlId=>Id
// longUrl=>orginalUrl;
// ShortUrlModel=>UrlRouter
// shorturl =>urlshort
//  validUrl=>validUrl
//shortid=>id
//GenerateShortUrl =>CreateShortUrl
//baseUrl => Url
//RedirectedToMain =>UrlRedir
// CheckUrl=>CheUrl
const { UrlRouter } = require("../Model/UrlModel");
const validUrl = require("valid-url");
const shortid = require("shortid");

const CreateShortUrl = async (orginalUrl) => {
  const Url = "https://mock12546.herokuapp.com/";

  const Id = shortid.generate();
  if (!validUrl.isUri(Url)) {
    return res.status(401).json("Invalid base URL");
  }
  if (validUrl.isUri(orginalUrl)) {
    try {
      let CheUrl = await UrlRouter.find({ orginalUrl });

      if (CheUrl.length > 0) {
        return {
          message: "already short url generated",
          status: "failed",
          data: CheUrl,
        };
      } else {
        let MakeUrl = Url + Id;

        let Data = {
          orginalUrl,
          shortUrl: MakeUrl,
          Id,
        };
        // console.log(MakeUrl);

        const newUrl = new UrlRouter(Data);
        newUrl.save();
        return { message: "url generated", status: "success", data: newUrl };
      }
    } catch (error) {
      return { message: "something went wrong", status: "error" };
    }
  } else {
    return { message: "Invalid orginalUrl", status: "error" };
  }
};

module.exports = { CreateShortUrl };
