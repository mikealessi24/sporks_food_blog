// these will be deleted once using the real db
let { users, getNextUserID } = require("./usersDb");
let { posts, getNextPostId, getDate } = require("./postsDb");

const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { request, response } = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
// get users by id *
// get posts by user *
// get post by id *
// get posts by type *
// create a post *
// delete a post *
// update a post *

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
app.get("/user-by-id", (request, response) => {
  let id = request.query.id;
  let user = users.find((el) => el.id == id);
  try {
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send(error);
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
        const user = { username: userFound.username };
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
app.get("/posts", (request, response) => {
  try {
    response.status(200).send(posts);
  } catch (error) {
    response.stautus(500).send(error);
  }
});

// gets all posts by a specific user  (case sensitive)
// might not need
app.get("/posts-by-username", (request, response) => {
  try {
    let username = request.query.username;
    console.log(username);
    let usersPosts = posts.filter((el) => el.username == username);
    response.status(200).send(usersPosts);
  } catch (error) {
    response.status(500).send(error);
  }
});

// gets a specific post by id
app.get("/posts-by-id", (request, response) => {
  try {
    let id = request.query.id;
    let post = posts.find((el) => el.id == id);
    response.status(200).send(post);
  } catch (error) {
    response.status(500).send(error);
  }
});

// gets all posts based on type
//might delete
app.get("/posts-by-type", (request, response) => {
  try {
    let type = request.query.type;
    let typePosts = posts.filter((el) => el.type == type);
    response.status(200).send(typePosts);
  } catch (error) {
    response.status(500).send(error);
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
app.delete("/post", (request, response) => {
  try {
    let id = request.query.id;
    let newPosts = posts.filter((el) => el.id != id);
    response.status(200).send(newPosts);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

// edit a post by selecting an id
app.put("/post", (request, response) => {
  try {
    let id = request.query.id;
    let username = request.body.username;
    let title = request.body.title;
    let text = request.body.text;
    let image = request.body.image;
    let link = request.body.link;
    let date = getDate();
    let tempPost = {};
    tempPost.id = id;
    tempPost.username = username;
    tempPost.title = title;
    tempPost.text = text;
    tempPost.image = image;
    tempPost.link = link;
    tempPost.date = date;
    posts = posts.map((el) => (el.id == id ? tempPost : el));
    response.status(200).send(posts);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

//send home page
// app.get("/home", async (request, response) => {
//   try {
//     console.log("send home page");
//     response.sendFile(path.join(__dirname + "/../sporksBlog/index.html"));
//   } catch (error) {
//     console.log(error);
//     response.status(500).send(error);
//   }
// });

async function dataEntry() {
  try {
    for (let i = 0; i < posts.length; i++) {
      const listingsArr = await PostModel.create(listings[i]);
    }
    // for (let i = 0; i < posts.length; i++) {
    //   if (posts[i]. ---- == null) {
    //     console.log(posts[i]);
    //   }
    // }
  } catch (error) {
    console.log(error);
  }
}

app.listen(4000, () => console.log("The port is running on port 4000"));
