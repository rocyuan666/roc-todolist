const db = require("../app/database");
const { apiSuccess } = require("../utils/apiBase");

class UserService {
  async getUserById(userId) {
    const sql = `SELECT * FROM sys_user WHERE user_id = ?;`;
    const [result] = await db.execute(sql, [userId]);
    return apiSuccess(result);
  }
}

module.exports = new UserService();
