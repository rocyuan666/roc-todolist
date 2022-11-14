const jwt = require("jsonwebtoken");
const { PUBLIC_KEY } = require("../app/config");
const { apiError } = require("../utils/apiBase");

const tokenAuth = async (ctx, next) => {
  const token = ctx.headers.token;
  if (!token) {
    ctx.body = apiError("未登录", 401);
  } else {
    try {
      /*
        verify(token, 公钥, 选项{algorithms: 算法})
        返回 数据体 + iat与exp
      */
      const decode = await jwt.verify(token, PUBLIC_KEY, { algorithms: ["RS256"] });
      ctx.user = decode;
      await next();
    } catch (error) {
      ctx.body = apiError(error, 401);
    }
  }
};
module.exports = {
  tokenAuth,
};
