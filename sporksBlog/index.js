// these will be deleted once using the real db
let { users, getNextUserID } = require("./usersDb");
const posts = require("./postsDb");

const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { request, response } = require("express");
const { constants } = require("buffer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("views"));

const un = process.env.user;
const pw = process.env.password;
mongoose.connect(
  `mongodb+srv://${un}:${pw}@cluster0.kzid4.mongodb.net/sporksDb?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  firstname: { type: String },
  lastname: { type: String },
});

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: String, required: true },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const PostModel = mongoose.model("post", PostSchema);
const UserModel = mongoose.model("user", userSchema);

//LIST OF ROUTES TO MAKE
//get full list of users *
// get full list of posts *
// get users by id*
// get post by id *
// create a post *
// delete a post *
// update a post(still need this)

//gets all users from db
//might not be needed
app.get("/users", async (request, response) => {
  try {
    const users = await UserModel.find();
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

// gets a single user by id
app.get("/user-by-id", async (request, response) => {
  try {
    const id = request.query.id;
    const user = await UserModel.findById(id);
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

// creating a user with a hashed pw in the database
app.post("/user", async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      firstname,
      lastname,
      username,
      password: hashedPassword,
    });

    const newUser = await UserModel.create(user);
    console.log("created new user");
    response.status(201).send(newUser);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

//authenticate a user
app.post("/authenticate-user", async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;
    if (!username || !password) {
      return response
        .status(404)
        .send({ message: "enter a username or password" });
    }
    const found = await UserModel.find({ username });
    const userFound = found[0];

    if (userFound) {
      if (await bcrypt.compare(password, userFound.password)) {
        const user = { id: userFound._id, username: userFound.username };
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        return response
          .status(200)
          .send({ jwt: token, message: "you have logged in" });
      } else {
        return response.status(401).send({ message: "invalid password" });
      }
    } else {
      return response.status(404).send({ message: "invalid username" });
    }
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

//gets full list of posts
app.get("/posts", async (request, response) => {
  try {
    const posts = await PostModel.find();
    response.status(200).send(posts);
  } catch (error) {
    response.status(500).send(error);
  }
});

// gets a users specific posts
// need to add verifyToken
app.post("/posts-by-user", verifyToken, async (request, response) => {
  try {
    const creator = request.user.id;
    const posts = await PostModel.find({ creator });
    response.status(200).send(posts);
  } catch (error) {
    response.status(500).send(error);
  }
});

// gets a specific post by id
app.get("/post-by-id", async (request, response) => {
  try {
    let id = request.query.id;
    const post = await PostModel.findById(id);
    response.status(200).send(post);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

// create a post
app.post("/post", async (request, response) => {
  try {
    console.log("create a post");
    const postInstance = new PostModel(request.body);
    const newPost = await PostModel.create(postInstance);
    response.status(200).send({ message: "created", newPost });
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

//delete a post by selecting an id
app.delete("/post", verifyToken, async (request, response) => {
  try {
    const id = request.query.id;
    const deletedPost = await PostModel.findByIdAndDelete(id);
    response.status(200).send(deletedPost);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

// edit a post by selecting an id
app.put("/post", (request, response) => {
  try {
    let id = request.query.id;

    response.status(200).send(posts);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

// send a full post
app.get("/fullpost", async (request, response) => {
  try {
    console.log("read a post page");
    response.sendFile(path.join(__dirname + "/views/postReader.html"));
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

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
