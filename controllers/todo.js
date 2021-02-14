const { Todo } = require("../db/models");

exports.fetchTodo  = async (todoId, next) => {
  try {
    const todoFound = await Todo.findByPk(todoId);
    if (todoFound) return todoFound;
    else next({ message: "todo does not exist" });
  } catch (error) {
    next(error);
  }
};

exports.todoList = async (req, res, next) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

exports.todoCreate = async (req, res, next) => {
    try {
      console.log(req);
      const newTodo = await Todo.create(req.body);
      res.status(201).json(newTodo);
    } catch (error) {
      next(error);
    }
  };
  