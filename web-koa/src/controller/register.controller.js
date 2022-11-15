const registerService = require("../service/register.service");

class RegisterController {
  async register(ctx, next) {
    const { nickname, username, password } = ctx.request.body;
    ctx.body = await registerService.register(nickname, username, password);
  }
}

module.exports = new RegisterController();
