const path = require("path");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const serve = require("koa-static");
const { cors } = require("../middleware/cors.middleware");
const errorHandler = require("./error-handle");
const useRoutes = require("../router");

const app = new Koa();

app.use(cors);
app.use(serve(path.join(__dirname, "..", "..", "./public")));
app.useRoutes = useRoutes;
app.use(bodyParser());
app.useRoutes();
app.on("error", errorHandler);

module.exports = app;
