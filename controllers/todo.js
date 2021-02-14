const { Todo } = require("../db/models");

exports.fetchTodo = async (todoId, next) => {
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
    const newTodo = await Todo.create(req.body);
    console.log(newTodo);

    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

exports.todoUpdate = async (req, res, next) => {
    await req.todo.update(req.body);
    res.status(200).json(req.todo);
  };
  
  exports.todoDelete = async (req, res, next) => {
    await req.todo.destroy();
    res.status(204).end();
  };
