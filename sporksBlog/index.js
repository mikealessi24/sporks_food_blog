const { users } = require("../sporksBlogServer/usersDb");
const { response } = require("express");

// gets all posts from server
function getPosts() {
  fetch("http://localhost:4000/posts")
    .then((response) => response.json())
    .then((posts) => previewPosts(posts));
}

// renders the preview post to the screen
function previewPosts(posts) {
  posts.map((el) => {
    document.getElementById("preview-posts").innerHTML += `
    <div onclick="getPostById(${el.id})" class="single-preview" style="background-image: url(${el.image})">
      <div class="title">${el.title}</div>
    </div>`;
  });
}

//gets a single post by id when clicked
function getPostById(id) {
  fetch(`http://localhost:4000/posts-by-id?id=${id}`)
    .then((response) => response.json())
    .then((postById) => renderPostById(postById));
}

function renderPostById(post) {
  document.getElementById(
    "single-post-cont"
  ).innerHTML = `<div class="single-post">
  <div class="spHeader">
    <div class="spTitle">${post.title}</div>
    <div class="spUsername">Author: ${post.username}</div>
    <div class="spType">${post.type}</div>
    <div class="spDate">${post.date}</div>
  </div>
  <div class="spImg-cont">
    <div class="spImage"><img class="spImage" src="${post.image}" alt="" /></div>
  </div>
  <div class="spText">${post.text}</div>
  <div class="spType">${post.type}</div>
  <div class="spLink"><a href="${post.link}"/>Click here for Recipe!</div>
</div>`;
}

function getUsers() {
  fetch("http://localhost:4000/users")
    .then((response) => response.json())
    .then((users) => verification(users));
}

function verification(users) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = users.filter((el) => {
    if (el.username == username && el.password == password) {
      return users;
    }
  });
  document.getElementById("credentials-container").innerHTML =
    "<button onclick='createPostPage()'>Create a new post</button>";
  getUsersPosts(user);
}

function getUsersPosts(user) {
  fetch(`http://localhost:4000/posts-by-username?username=${user[0].username}`)
    .then((response) => response.json())
    .then((usersPosts) => renderUsersPosts(usersPosts));
}

function renderUsersPosts(usersPosts) {
  document.getElementById("single-post-cont").innerHTML = "";
  usersPosts.map((el) => {
    document.getElementById(
      "single-post-cont"
    ).innerHTML += `<div class="single-post">
  <div class="spHeader">
    <div class="spTitle">${el.title}</div>
    <div class="spUsername">Author: ${el.username}</div>
    <div class="spType">${el.type}</div>
    <div class="spDate">${el.date}</div>
  </div>
  <div class="spImg-cont">
    <div class="spImage"><img class="spImage" src="${el.image}" alt="" /></div>
  </div>
  <div class="spText">${el.text}</div>
  <div class="spType">${el.type}</div>
  <div class="spLink"><a href="${el.link}"/>Click here for Recipe!</div>
</div>`;
  });
}

function createPostPage() {
  document.getElementById(
    "single-post-cont"
  ).innerHTML = `<div class="post-creator">
  <div class="post-title">Create a Post!</div>
  <div class="post-box">
    <label>Title:</label>
    <input id="title" type="text" />
    <label>Text:</label>
    <textarea id="text" type="text"></textarea>
    <label>Image:</label>
    <input id="image" type="text" />
    <label>Recipe URL:</label>
    <input id="recipe"type="text" />
    <button onclick="createPost()">Create</button>
  </div>`;
}

async function createPost(
  url = "http://localhost:4000/post",
  data = {
    username: document.getElementById("username").value,
    title: document.getElementById("title").value,
    text: document.getElementById("text").value,
    image: document.getElementById("image").value,
    link: document.getElementById("recipe").value,
  }
) {
  const response = await fetch("http://localhost:4000/post", {
    method: "POST",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => getUsersPosts(data[data.length - 1].username));
}
