const { apiSuccess } = require("../utils/apiBase");
const { createUUID } = require("roc-utils");
const captchapng = require("captchapng");

class CaptchaService {
  async getCaptcha(cap, uuid) {
    const p = new captchapng(100, 40, cap); // width,height,numeric captcha
    p.color(220, 220, 220, 255); // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
    const imgbase64 = p.getBase64();
    return apiSuccess({
      uuid,
      captcha: `data:image/png;base64,${imgbase64}`,
    });
  }
}

module.exports = new CaptchaService();
