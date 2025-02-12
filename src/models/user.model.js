const db = require("../config/database");

class User {
  static async getAll() {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  }

  static async create(name, email, age) {
    const [result] = await db.query("INSERT INTO users (name, email, age) VALUES (?, ?, ?)", [name, email, age]);
    return { id: result.insertId, name, email, age };
  }

  static async update(id, name, email, age) {
    await db.query("UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?", [name, email, age, id]);
    return { id, name, email, age };
  }

  static async delete(id) {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    return { message: "User deleted successfully" };
  }
}

module.exports = User;
