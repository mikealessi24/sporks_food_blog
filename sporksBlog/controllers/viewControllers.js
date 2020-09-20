const path = require("path");

const fullPostPage = async (request, response) => {
  try {
    console.log("read a post page");
    response.sendFile(path.join(__dirname + "/views/postReader.html"));
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
};

module.exports = fullPostPage;
