const Router = require("@koa/router");
const { findById, editById } = require("../controller/user.controller");
const { tokenAuth } = require("../middleware/auto.middleware");

const userRouter = new Router({ prefix: "/user" });

userRouter.get("/userInfo", tokenAuth, findById);
userRouter.post("/edit", tokenAuth, editById);

module.exports = userRouter;
