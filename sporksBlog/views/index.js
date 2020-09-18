const posts = require("../postsDb");

// gets all posts from server
function getPosts() {
  fetch("http://localhost:4000/posts")
    .then((response) => response.json())
    // .then((posts) => console.log(posts))
    .then((posts) => previewPosts(posts));
}

// renders the preview post to the screen
function previewPosts(posts) {
  console.log(posts);
  posts.map((el) => {
    document.getElementById("preview-posts").innerHTML += `
    <a href="fullpost"><div onclick="storeId('${el._id}')" class="single-preview" style="background-image: url(${el.image})">
      <div class="title">${el.title}</div>
    </div></a>`;
  });
}

//gets a single post by id when clicked, moves it to local storage and sends fullpost page
function storeId(id) {
  console.log(id);
  localStorage.setItem("id", id);
}

function getPostById() {
  const postId = localStorage.getItem("id");
  console.log(postId);
  fetch(`http://localhost:4000/post-by-id?id=${postId}`)
    .then((response) => response.json())
    .then((postById) => postReader(postById));
}

// need to work on the creator
function postReader(post) {
  console.log(post);
  document.getElementById(
    "fullpost"
  ).innerHTML = `<div class="fpTitle">${post.title}</div>
  <div class="fpDate">${post.date}</div>
  <div class="fpCreator">Created by:${post.creator.username}</div>
  <div class="fullpost-header">
    <div class="fpImage">
      <img
        src="${post.image}"
      />
    </div>
    <div class="fpDescription-cont">
      <div class="fpDescription">
      ${post.description}
      </div>
    </div>
  </div>
  <div class="fpInfo">
    <div class="fpIngredients-cont">
      <div class="fpIngredients-title">Ingredients:</div>
      <div class="fpIngredients">
      ${post.ingredients}
      </div>
    </div>
    <div class="fpInstructions-cont">
      <div class="fpInstructions-title">Instructions:</div>
      <div class="fpInstructions">
      ${post.instructions}
      </div>
    </div>
  </div>
</div>`;
}

async function signIn(
  url = "http://localhost:4000/authenticate-user",
  data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  }
) {
  const response = await fetch("http://localhost:4000/authenticate-user", {
    method: "POST",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => storeUser(data.jwt));
}

function storeUser(jwt) {
  localStorage.setItem("jwt", jwt);
  getPostsByUser();
}

async function getPostsByUser(
  url = "http://localhost:4000/posts-by-user",
  data = { token: localStorage.getItem("jwt") }
) {
  const response = await fetch("http://localhost:4000/posts-by-user", {
    method: "POST",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => renderUsersPosts(data));
}

function renderUsersPosts(usersPosts) {
  document.getElementById("single-post-cont").innerHTML = "";
  usersPosts.map((el) => {
    document.getElementById(
      "single-post-cont"
    ).innerHTML += ` <div class="single-post">
    <div class="spImg-cont">
      <img src="${el.image}" alt="" />
    </div>
    <div class="spTitle-cont"></div>
    <div class="spHeader">
      <div class="spTitle">${el.title}</div>
      <div class="spDate">${el.date}</div>
      <div class="spText">${el.description}</div>
    </div>
    <div class="userPost-buttons">
      <button>DELETE</button>
      <button>UPDATE</button>
    </div>
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

// update
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
