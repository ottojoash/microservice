const db = require("../config/database");

class Product {
  static async getAll() {
    const [rows] = await db.query(
      "SELECT products.*, users.name as owner FROM products JOIN users ON products.user_id = users.id"
    );
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query(
      "SELECT products.*, users.name as owner FROM products JOIN users ON products.user_id = users.id WHERE products.id = ?",
      [id]
    );
    return rows[0];
  }

  static async getByUser(userId) {
    const [rows] = await db.query(
      "SELECT * FROM products WHERE user_id = ?",
      [userId]
    );
    return rows;
  }

  static async create(user_id, name, description, price, stock) {
    const [result] = await db.query(
      "INSERT INTO products (user_id, name, description, price, stock) VALUES (?, ?, ?, ?, ?)",
      [user_id, name, description, price, stock]
    );
    return { id: result.insertId, user_id, name, description, price, stock };
  }

  static async update(id, user_id, name, description, price, stock) {
    await db.query(
      "UPDATE products SET user_id = ?, name = ?, description = ?, price = ?, stock = ? WHERE id = ?",
      [user_id, name, description, price, stock, id]
    );
    return { id, user_id, name, description, price, stock };
  }

  static async delete(id) {
    await db.query("DELETE FROM products WHERE id = ?", [id]);
    return { message: "Product deleted successfully" };
  }
}

module.exports = Product;
