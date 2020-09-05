let { users, getNextUserID } = require("./usersDb");
let { posts, getNextPostId, getDate } = require("./postsDb");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => console.log("The port is running on port 4000"));

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

//gets full user array
app.get("/users", (request, response) => {
  try {
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

//gets full list of posts
app.get("/posts", (request, response) => {
  try {
    response.status(200).send(posts);
  } catch (error) {
    response.stautus(500).send(error);
  }
});

// gets all posts by a specific user  (case sensitive)
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
app.post("/post", (request, response) => {
  try {
    let id = getNextPostId();
    let username = request.body.username;
    let title = request.body.title;
    let text = request.body.text;
    let image = request.body.image;
    let link = request.body.link;
    let date = getDate();
    posts.push({
      id: id,
      title: title,
      text: text,
      image: image,
      link: link,
      date: date,
    });
    response.status(200).send(posts);
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
