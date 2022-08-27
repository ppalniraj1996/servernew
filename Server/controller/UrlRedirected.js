// urlId=>Id
// orginalUrl=>longUrl;
// ShortUrlModel=>UrlRouter
// shorturl =>urlshort
//  validUrl=>correctUrl
//shortid=>id
//GenerateShortUrl =>CreateShortUrl
//baseUrl => Url
//RedirectedToMain =>UrlRedir

const { UrlRouter } = require("../Model/UrlModel");
const UrlRedir = async (Id) => {
  console.log(Id, "Done");
  try {
    const findUrl = await UrlRouter.find({ Id });
    console.log();
    if (findUrl) {
      return {
        message: "Referesh",
        status: "success",
        data: findUrl[0].longUrl,
      };
    } 
    else {
      return { message: "No url ", status: "error" };
    }
  }
   catch (error) {
    return { message: "Invalid", status: "error" };
  }
};

module.exports = { UrlRedir };
