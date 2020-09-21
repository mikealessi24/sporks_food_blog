const fullPostPage = require("../controllers/viewControllers");

const viewRoutes = (app) => {
  app.get("/fullpost", fullPostPage);
};

module.exports = { viewRoutes };
