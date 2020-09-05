// gets all posts from server
function getPosts() {
  fetch("http://localhost:4000/posts")
    .then((response) => response.json())
    .then((posts) => previewPosts(posts));
}

function previewPosts(posts) {
  posts.map((el) => {
    document.getElementById("preview-posts").innerHTML += `
    <div onclick="" class="single-preview" style="background-image: url(${el.image})">
      <div class="title">${el.title}</div>
    </div>`;
  });
}
