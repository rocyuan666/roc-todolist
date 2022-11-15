const db = require("../app/database");
const { asyncTasks } = require("roc-utils");
const { apiSuccess } = require("../utils/apiBase");

class UserService {
  async getUserById(userId) {
    const sql = `SELECT id, nickname, username, headimg, addtime, edittime FROM roc_user WHERE id = ?;`;
    const [result] = await db.execute(sql, [userId]);
    return apiSuccess(result[0]);
  }
  async editUserById(userId, nickname, headimg) {
    const sql = `UPDATE roc_user SET nickname=?, headimg=? WHERE id=?`;
    const [err, result] = await asyncTasks(db.execute(sql, [nickname, headimg, userId]));
    return apiSuccess(result[0]);
  }
}

module.exports = new UserService();
