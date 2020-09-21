const {
  getAllUsers,
  postUser,
  editUser,
  deleteUser,
  authenticateUser,
  getUserById,
} = require("../controllers/userControllers");

const jwt = require("jsonwebtoken");

const userRoutes = (app) => {
  app.get("/users", getAllUsers);
  app.get("/user-by-id", getUserById);
  app.post("/authenticate-user", authenticateUser);
  app.post("/user", postUser);
  app.put("/user", editUser);
  app.delete("/user", deleteUser);
};

module.exports = { userRoutes };
