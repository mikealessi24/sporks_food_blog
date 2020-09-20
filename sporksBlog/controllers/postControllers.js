const PostModel = require("../models/postModel");

const getAllPosts = async (request, response) => {
  try {
    const posts = await PostModel.find();
    response.status(200).send(posts);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getPostsByUser = async (request, response) => {
  try {
    const creator = request.user.id;
    const posts = await PostModel.find({ creator });
    response.status(200).send(posts);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getPostById = async (request, response) => {
  try {
    let id = request.query.id;
    const post = await PostModel.findById(id);
    response.status(200).send(post);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
};

const createPost = async (request, response) => {
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
};

const deletePost = async (request, response) => {
  try {
    const id = request.query.id;
    const deletedPost = await PostModel.findByIdAndDelete(id);
    response.status(200).send(deletedPost);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
};

const editPost = async (request, response) => {
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
};

module.exports = {
  deletePost,
  editPost,
  createPost,
  getPostsByUser,
  getPostById,
  getAllPosts,
};
