const express = require("express");
const controller = require("../controllers/todo");
const router = express.Router();

router.param("todoId", async (req, res, next, todoId) => {
  const todoFound = await controller.fetchTodo(todoId, next);
  if (todoFound) {
    req.todo = todoFound;
    next();
  } else {
    const error = new Error("todo Not Found");
    error.status = 404;
    next(error);
  }
});

router.get("/", controller.todoList);
router.post("/", controller.todoCreate);

module.exports = router;
