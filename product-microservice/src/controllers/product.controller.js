const Product = require("../models/product.model");

// Get all products (with owner details)
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.getById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all products for a specific user
exports.getProductsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const products = await Product.getByUser(userId);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new product (linked to a user)
exports.createProduct = async (req, res) => {
  try {
    const { user_id, name, description, price, stock } = req.body;
    const newProduct = await Product.create(user_id, name, description, price, stock);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { user_id, name, description, price, stock } = req.body;
    const updatedProduct = await Product.update(req.params.id, user_id, name, description, price, stock);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.delete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
