const express = require("express");
const questionController = require("../controllers/question.controller");

const questionRouter = express.Router();

questionRouter.get("/", questionController.getQuestion);
questionRouter.get("/:id", questionController.getQuestionById);
questionRouter.get("/:id/answers", questionController.getAnswerByIdOfQuestion);
questionRouter.post("/", () => {});

module.exports = questionRouter;
