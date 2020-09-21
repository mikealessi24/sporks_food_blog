const {
  deletePost,
  editPost,
  createPost,
  getPostsByUser,
  getPostById,
  getAllPosts,
} = require("../controllers/postControllers");

const jwt = require("jsonwebtoken");

function verifyToken(request, response, next) {
  const token = request.body.token;
  if (token == null) {
    return response.status(401).send({ message: "unverified user" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return response.status(403).send({ message: "invalid jwt" });
    }
    console.log("user is verified");
    request.user = user;
  });
  next();
}

const postRoutes = (app) => {
  app.get("/posts", getAllPosts);
  app.post("/posts-by-user", verifyToken, getPostsByUser);
  app.get("/post-by-id", getPostById);
  app.post("/post", verifyToken, createPost);
  app.delete("/post", verifyToken, deletePost);
  app.put("/post", verifyToken, editPost);
};

module.exports = { postRoutes, verifyToken };
