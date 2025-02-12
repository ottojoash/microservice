const User = require("../models/user.model");

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get single user
exports.getUserById = async (req, res) => {
  try {
    const user = await User.getById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = await User.create(name, email, age);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const updatedUser = await User.update(req.params.id, name, email, age);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await User.delete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
