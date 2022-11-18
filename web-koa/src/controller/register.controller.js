const registerService = require("../service/register.service");

class RegisterController {
  async register(ctx, next) {
    const { nickname, username, password, uuid, captcha } = ctx.request.body;
    ctx.body = await registerService.register(nickname, username, password, uuid, captcha);
  }
}

module.exports = new RegisterController();
