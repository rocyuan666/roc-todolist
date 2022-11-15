const db = require("../app/database");
const { asyncTasks } = require("roc-utils");
const { apiError, apiSuccess } = require("../utils/apiBase");
const { md5 } = require("../utils/crypto-utils");

class RegisterService {
  async register(nickname, username, password) {
    if (!nickname) {
      return apiError("昵称为空!");
    } else if (!username) {
      return apiError("用户名为空!");
    } else if (!password) {
      return apiError("密码为空！");
    }
    const selectSql = "SELECT * FROM roc_user WHERE username = ?";
    const [users] = await db.execute(selectSql, [username]);
    if (users.length) {
      return apiError("用户名已存在");
    }
    const addtime = new Date();
    const sqlInsert = "INSERT INTO roc_user(nickname, username, password, addtime) VALUES(?, ?, ?, ?)";
    const [err, result] = await asyncTasks(db.execute(sqlInsert, [nickname, username, md5(password), addtime]));
    if (err) {
      return apiError(err);
    }
    return apiSuccess(result[0].insertId);
  }
}

module.exports = new RegisterService();
