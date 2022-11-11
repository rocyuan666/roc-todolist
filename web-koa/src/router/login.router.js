const Router = require("@koa/router");
const { login } = require("../controller/login.controller");

const loginRouter = new Router({ prefix: "/login" });

loginRouter.post("/", login);

module.exports = loginRouter;
