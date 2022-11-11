const registerService = require("../service/register.service");

class RegisterController {
  async register(ctx, next) {
    const { username, password } = ctx.request.body;
    ctx.body = await registerService.register(username, password);
  }
}

module.exports = new RegisterController();
