const captchaService = require("../service/captcha.service");
const { createUUID } = require("roc-utils");
const redisClient = require("../app/redis");

class CaptchaController {
  async getCaptcha(ctx, next) {
    const cap = parseInt(Math.random() * 9000 + 1000);
    const uuid = createUUID();
    await redisClient.set(uuid, cap, {
      EX: 60, // 过期时间60秒(1分钟)
      NX: true, // 键不存在时，对键进行设置
    });
    ctx.body = await captchaService.getCaptcha(cap, uuid);
  }
}

module.exports = new CaptchaController();
