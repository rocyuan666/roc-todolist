const db = require("../app/database");
const jwt = require("jsonwebtoken");
const { apiSuccess, apiError } = require("../utils/apiBase");
const { md5 } = require("../utils/crypto-utils");
const { PRIVATE_KEY } = require("../app/config");

class LoginService {
  async login(username, password) {
    if (!username) {
      return apiError("用户名为空!");
    } else if (!password) {
      return apiError("密码为空！");
    }
    const sql = "SELECT * FROM roc_user WHERE username = ?";
    const [result] = await db.execute(sql, [username]);
    if (result.length == 0) {
      return apiError("无此用户");
    } else if (md5(password) != result[0].password) {
      return apiError("密码错误");
    } else {
      /*
        sign(数据体, 私钥, 选项{algorithm: 算法, expiresIn: 到期时间})
        返回token
      */
      const token = jwt.sign(
        {
          id: result[0].user_id,
          username: result[0].user_name,
        },
        PRIVATE_KEY,
        {
          algorithm: "RS256",
          expiresIn: 60 * 60 * 24,
        }
      );
      return apiSuccess({ token });
    }
  }
}
module.exports = new LoginService();
