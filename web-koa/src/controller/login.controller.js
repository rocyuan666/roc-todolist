const loginService = require("../service/login.service");

class LoginController {
  async login(ctx, next) {
    const { username, password, uuid, captcha } = ctx.request.body;
    ctx.body = await loginService.login(username, password, uuid, captcha);
  }
}

module.exports = new LoginController();
