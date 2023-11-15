const categoryController = require("../controllers/category.controller");
const categoryRouter = require("./category.route");
const questionRouter = require("./question.route");

function routes(app) {
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/question", questionRouter);
}
module.exports = routes;
