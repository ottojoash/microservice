const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { authenticateUser } = require("../middleware/auth.middleware");
require("dotenv").config();

const router = express.Router();

router.use(
  "/users",
  authenticateUser, // Protect user routes
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/users": "" },
  })
);

module.exports = router;
