const {
  getAllUsers,
  postUser,
  authenticateUser,
  getUserById,
} = require("./controllers/userControllers");

const {
  deletePost,
  editPost,
  createPost,
  getPostsByUser,
  getPostById,
  getAllPosts,
} = require("./controllers/postControllers");

const fullPostPage = require("./controllers/viewControllers");

const jwt = require("jsonwebtoken");
const app = require("./server");

//gets all users from db
app.get("/users", getAllUsers);

// gets a single user by id
app.get("/user-by-id", getUserById);

// creating a user with a hashed pw in the database
app.post("/user", postUser);

//authenticate a user by comparing hashedPw
app.post("/authenticate-user", authenticateUser);

//gets full list of posts
app.get("/posts", getAllPosts);

// gets a users specific posts
app.post("/posts-by-user", verifyToken, getPostsByUser);

// gets a specific post by id
app.get("/post-by-id", getPostById);

// create a post
app.post("/post", verifyToken, createPost);

//delete a post by selecting an id
app.delete("/post", verifyToken, deletePost);

// edit a post by selecting an id
app.put("/post", verifyToken, editPost);

// send a full post
app.get("/fullpost", fullPostPage);

//authorize user
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

app.listen(4000, () => console.log("The port is running on port 4000"));
