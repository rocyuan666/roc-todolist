const captchaService = require("../service/captcha.service");
const { createUUID } = require("roc-utils");
const redisClient = require("../app/redis");

class CaptchaController {
  async getCaptcha(ctx, next) {
    const cap = parseInt(Math.random() * 9000 + 1000);
    const uuid = createUUID();
    await redisClient.set(uuid, cap, 60 * 60);
    ctx.body = await captchaService.getCaptcha(cap, uuid);
  }
}

module.exports = new CaptchaController();
