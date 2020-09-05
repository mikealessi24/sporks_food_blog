let { users, getNextUserID } = require("./usersDb");
let { posts, getNextPostId } = require("./postsDb");
const express = require("express");
const { request, response } = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => console.log("The port is running on port 4000"));

//LIST OF ROUTES TO MAKE
//get full list of users *
// get full list of posts *
// get users by id *
// get posts by user
// get post by id
// get posts by type
// create a post
// delete a post
// update a post

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

// gets all posts by a specific user
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
