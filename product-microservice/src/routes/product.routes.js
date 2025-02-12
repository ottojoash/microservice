const express = require("express");
const {
  getProducts,
  getProductById,
  getProductsByUser,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/user/:userId", getProductsByUser); // Fetch products by user
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
