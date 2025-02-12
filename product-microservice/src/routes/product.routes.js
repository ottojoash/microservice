const express = require("express");
const {
  getProducts,
  getProductById,
  getProductsByUser,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const { authenticateUser } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/user/:userId", authenticateUser, getProductsByUser);
router.post("/", authenticateUser, createProduct);
router.put("/:id", authenticateUser, updateProduct);
router.delete("/:id", authenticateUser, deleteProduct);

module.exports = router;
