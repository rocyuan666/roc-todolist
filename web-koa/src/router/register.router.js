const Router = require("@koa/router");
const { register } = require("../controller/register.controller");

const registerRouter = new Router({ prefix: "/register" });

registerRouter.post("/", register);

module.exports = registerRouter;
