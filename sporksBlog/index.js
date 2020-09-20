const UserModel = require("./models/userModel");
const PostModel = require("./models/postModel");
const {
  getAllUsers,
  postUser,
  authenticateUser,
  getUserById,
} = require("./controllers/userControllers");

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
app.get("/users", getAllUsers);

// gets a single user by id
app.get("/user-by-id", getUserById);

// creating a user with a hashed pw in the database
app.post("/user", postUser);

//authenticate a user
app.post("/authenticate-user", authenticateUser);

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
app.post("/post", verifyToken, async (request, response) => {
  try {
    console.log("create a post");
    const post = {
      title: request.body.title,
      description: request.body.description,
      ingredients: request.body.ingredients,
      instructions: request.body.instructions,
      image: request.body.image,
      date: request.body.date,
      creator: request.user.id,
    };
    // const postInstance = new PostModel(request.body);
    const newPost = await PostModel.create(post);
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
app.put("/post", verifyToken, async (request, response) => {
  try {
    console.log("update a post");
    const id = request.query.id;
    const title = request.body.title;
    const description = request.body.description;
    const ingredients = request.body.ingredients;
    const instructions = request.body.instructions;
    const image = request.body.image;
    const date = request.body.date;
    const creator = request.user.id;
    const currentPost = await PostModel.findById(id);

    const updatedPost = await PostModel.findByIdAndUpdate(id, {
      title: title ? title : currentPost.title,
      description: description ? description : currentPost.description,
      ingredients: ingredients ? ingredients : currentPost.ingredients,
      instructions: instructions ? instructions : currentPost.instructions,
      image: image ? image : currentPost.image,
      date: date ? date : currentPost.date,
      creator,
    });
    response.status(200).send(updatedPost);
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
