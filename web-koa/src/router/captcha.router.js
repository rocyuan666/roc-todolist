const Router = require("@koa/router");
const { getCaptcha } = require("../controller/captcha.controller");

const captchaRouter = new Router({ prefix: "/captcha" });

captchaRouter.get("/", getCaptcha);

module.exports = captchaRouter;
