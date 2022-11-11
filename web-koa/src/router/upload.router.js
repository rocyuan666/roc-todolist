const Router = require("@koa/router");
const { upload } = require("../controller/upload.controller");
const { uploadMiddleware } = require("../middleware/upload.middleware");
const { tokenAuth } = require("../middleware/auto.middleware");

const uploadRouter = new Router({ prefix: "/upload" });

uploadRouter.post("/", tokenAuth, uploadMiddleware, upload);

module.exports = uploadRouter;
