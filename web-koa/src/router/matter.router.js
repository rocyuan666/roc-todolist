const Router = require("@koa/router");
const { tokenAuth } = require("../middleware/auto.middleware");
const { add, del, edit, list } = require("../controller/matter.controller");

const matterRouter = new Router({ prefix: "/matter" });

matterRouter.post("/add", tokenAuth, add);
matterRouter.delete("/del", tokenAuth, del);
matterRouter.put("/edit", tokenAuth, edit);
matterRouter.get("/list", tokenAuth, list);

module.exports = matterRouter;
