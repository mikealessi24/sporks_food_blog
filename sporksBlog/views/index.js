const { url } = require("inspector");

// gets all posts from server
function getPosts() {
  fetch("http://localhost:4000/posts")
    .then((response) => response.json())
    .then((posts) => landingPreview(posts));
}

// renders post previews to landing page
function landingPreview(posts) {
  console.log(posts);
  posts.map((el) => {
    document.getElementById("landing").innerHTML += `
    <a href="fullpost"><div onclick="storeId('${el._id}')" class="landing-preview" style="background-image: url(${el.image})">
      <div class="title">${el.title}</div>
    </div></a>`;
  });
}

// gets all posts again, renders differently
function getPostsSignedIn() {
  fetch("http://localhost:4000/posts")
    .then((response) => response.json())
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

//stores a single post id in local storage when clicked on
function storeId(id) {
  console.log(id);
  localStorage.setItem("id", id);
}

// gets a post by id
function getPostById() {
  const postId = localStorage.getItem("id");
  console.log(postId);
  fetch(`http://localhost:4000/post-by-id?id=${postId}`)
    .then((response) => response.json())
    .then((postById) => postReader(postById));
}

// renders a read page for a post
function postReader(post) {
  console.log("this is post", post);
  document.getElementById(
    "fullpost"
  ).innerHTML = `<div class="fpTitle">${post.title}</div>
  <div class="fpDate">${post.date}</div>
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

// sign in
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
    .then((data) => storeUser(data.jwt))
    .then(() => storeUsername())
    .then(() => updateContentPage())
    .then(() => getPostsSignedIn())
    .then(() => renderSignedIn());
}

// stores username in local storage
function storeUsername() {
  let usernameLogin = document.getElementById("username").value;
  localStorage.setItem("un", usernameLogin);
}

// stores a users jwt in local storage
function storeUser(jwt) {
  localStorage.setItem("jwt", jwt);
  getPostsByUser();
}

//checking signed in
function checkJwt() {
  const signedIn = localStorage.getItem("jwt");
  if (signedIn) {
    console.log("signed in");
    renderSignedIn();
  }
}

// re-renders main page
function updateContentPage() {
  document.getElementById("content").innerHTML = `
  <div class="side-nav">
        <div class="preview-posts" id="preview-posts"></div>
      </div>
      <div class="post-container">
        <div id="single-post-cont" class="single-post-cont">
          <div class="results-cont">
            <div class="results" id="results"></div>
          </div>
        </div>
      </div>
  `;
}

// changes sign in welcome and adds signed in features
function renderSignedIn() {
  document.getElementById(
    "userWelcome"
  ).innerHTML = `WELCOME BACK, ${localStorage.getItem("un")}!`;
  document.getElementById(
    "create-post"
  ).innerHTML = `<button onclick="createPostPage()">Create a Post</button>`;
  document.getElementById(
    "signed-in"
  ).innerHTML = `<a href="/index.html"><div class="logout"><button onclick="logout()">Logout</button></div></a>`;
  document.getElementById(
    "drinkSearch"
  ).innerHTML = `<div class="search-drink-caption"><div>Search for a drink recipe!</div><input type="text" placeholder="Enter a drink name..." id="drink" />
  <button onclick="drinkSearch()">Search</button></div>`;
}

// logout
function logout() {
  localStorage.clear();
  location.reload();
}

// creates a user
async function createUser(
  url = "http://localhost:4000/user",
  data = {
    username: document.getElementById("createUn").value,
    password: document.getElementById("createPw").value,
    firstname: document.getElementById("createFn").value,
    lastname: document.getElementById("createLn").value,
  }
) {
  const response = await fetch("http://localhost:4000/user", {
    method: "POST",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then(() => closeModal())
    .then(() => alert("account has been created"));
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// gets a user's posts if a jwt token is stored
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

// renders user's posts to screen
function renderUsersPosts(usersPosts) {
  document.getElementById("single-post-cont").innerHTML = "";
  usersPosts.map((el) => {
    document.getElementById(
      "single-post-cont"
    ).innerHTML += `<div class="single-post">
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
      <button onclick="deletePost('${el._id}')">DELETE</button>
      <button onclick="updatePostPage(); storeId('${el._id}')">UPDATE</button>
      <a href="fullpost"><button onclick="storeId('${el._id}'); getPostById()">READ</button></a>
    </div>
  </div>`;
  });
}
// deletes a post, re-renders all users post preview to screen
async function deletePost(
  id,
  url = `http://localhost:4000/post`,
  data = { token: localStorage.getItem("jwt") }
) {
  const response = await fetch(`http://localhost:4000/post?id=${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => console.log(data))
    .then(() => getPostsByUser());
}

// renders a create post template
function createPostPage() {
  document.getElementById(
    "single-post-cont"
  ).innerHTML = `<div class="post-creator">
  <div class="post-title">Create a Post!</div>
  <div class="post-box">
    <label>Title:</label>
    <input id="title" type="text" />
    <label>Description:</label>
    <textarea id="description" type="text"></textarea>
    <label>Ingredients:</label>
    <textarea id="ingredients" type="text"></textarea>
    <label>Instructions:</label>
    <textarea id="instructions" type="text"></textarea>
    <label>Image:</label>
    <input id="image" type="text" />
    <label>Date:</label>
    <input id="date" type="date">
    <button onclick="createPost()">Create</button>
  </div>
</div>`;
}

// renders an update post template
function updatePostPage() {
  document.getElementById(
    "single-post-cont"
  ).innerHTML = `<div class="post-creator">
  <div class="post-title">Update a Post!</div>
  <div class="post-box">
    <label>Title:</label>
    <input id="title" type="text" />
    <label>Description:</label>
    <textarea id="description" type="text"></textarea>
    <label>Ingredients:</label>
    <textarea id="ingredients" type="text"></textarea>
    <label>Instructions:</label>
    <textarea id="instructions" type="text"></textarea>
    <label>Image:</label>
    <input id="image" type="text" />
    <label>Date:</label>
    <input id="date" type="date">
    <button onclick="updatePost()">Update</button>
  </div>
</div>`;
}

// creates a post
async function createPost(
  url = "http://localhost:4000/post",
  data = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    ingredients: document.getElementById("ingredients").value,
    instructions: document.getElementById("instructions").value,
    image: document.getElementById("image").value,
    date: document.getElementById("date").value,
    token: localStorage.getItem("jwt"),
  }
) {
  const response = await fetch("http://localhost:4000/post", {
    method: "POST",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => getPostsByUser());
}

//upadates a post
async function updatePost(
  url = "http://localhost:4000/post",
  data = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    ingredients: document.getElementById("ingredients").value,
    instructions: document.getElementById("instructions").value,
    image: document.getElementById("image").value,
    date: document.getElementById("date").value,
    token: localStorage.getItem("jwt"),
  }
) {
  const id = localStorage.getItem("id");
  const response = await fetch(`http://localhost:4000/post?id=${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => getPostsByUser());
}

// fetches drink recipes from external cocktail api
function drinkSearch() {
  name = document.getElementById("drink").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .then((recipes) => renderRecipes(recipes.drinks));
}

// renders drink recipes
function renderRecipes(recipes) {
  document.getElementById("single-post-cont").innerHTML = "";
  recipes.map((el) => {
    document.getElementById("single-post-cont").innerHTML += `
  <div class="single-post">
    <div class="spImg-cont">
      <img src="${el.strDrinkThumb}" alt="" />
    </div>
    <div class="spTitle-cont"></div>
    <div class="spHeader">
      <div class="spTitle">${el.strDrink}</div>
      <div class="spText">${el.strInstructions}</div>
    </div>
    <div class="measureIngredients">
      <div>${el.strMeasure1}: ${el.strIngredient1}</div>
      <div>${el.strMeasure2}: ${el.strIngredient2}</div>
      <div>${el.strMeasure3}: ${el.strIngredient3}</div>
    </div>
  </div>
  `;
  });
}
