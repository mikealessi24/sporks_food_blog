const {
  getAllUsers,
  postUser,
  authenticateUser,
  getUserById,
} = require("../controllers/userControllers");

const jwt = require("jsonwebtoken");

const userRoutes = (app) => {
  app.get("/users", getAllUsers);
  app.get("/user-by-id", getUserById);
  app.post("/authenticate-user", authenticateUser);
  app.post("/user", postUser);
};

module.exports = { userRoutes };
