const app = require("./src/app");

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
