const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { authenticateUser } = require("../middleware/auth.middleware");
require("dotenv").config();

const router = express.Router();

router.use(
  "/products",
  authenticateUser, // Protect product routes
  createProxyMiddleware({
    target: process.env.PRODUCT_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/products": "" },
  })
);

module.exports = router;
