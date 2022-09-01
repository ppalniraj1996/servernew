

const { UrlRouter } = require("../Model/UrlModel");
let str =""
const UrlRedir = async (urlid) => {
  if(urlid!=="undefined"){
    str=urlid
     console.log(str); 
  }


  // console.log(urlid, "Check");
  try {
    const findUrl = await UrlRouter.find({ Id: str });
    console.log(findUrl);
    if (findUrl) {
      return {
        message: "Referesh",
        status: "success",
        data: findUrl[0].orginalUrl,
      };
    } else {
      return { message: "No url ", status: "error" };
    }
  } catch (error) {
    return { message: "Invalid", status: "error" };
  }
};

module.exports = { UrlRedir };
