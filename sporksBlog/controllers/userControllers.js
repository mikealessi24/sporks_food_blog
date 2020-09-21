const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async (request, response) => {
  try {
    const users = await UserModel.find();
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getUserById = async (request, response) => {
  try {
    const id = request.query.id;
    const user = await UserModel.findById(id);
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
};

const postUser = async (request, response) => {
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
};

const authenticateUser = async (request, response) => {
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
        const user = {
          id: userFound._id,
          username: userFound.username,
          password: userFound.password,
        };
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
};

const editUser = async (request, response) => {
  try {
    console.log("edit a user");
    const id = request.query.id;
    const username = request.body.username;
    const password = request.body.password;
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;

    const currentUser = await UserModel.findById(id);

    const updatedUser = await UserModel.findByIdAndUpdate(id, {
      username: username ? username : currentUser.username,
      password: password ? password : currentUser.password,
      firstname: firstname ? firstname : currentUser.firstname,
      lastname: lastname ? lastname : currentUser.lastname,
    });
    response.status(200).send(updatedUser);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
};

const deleteUser = async (request, response) => {
  try {
    const id = request.query.id;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    response.status(200).send(deletedUser);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  postUser,
  authenticateUser,
  deleteUser,
  getUserById,
  editUser,
};
