const loginService = require("../service/login.service");

class LoginController {
  async login(ctx, next) {
    const { username, password } = ctx.request.body;
    ctx.body = await loginService.login(username, password);
  }
}

module.exports = new LoginController();
