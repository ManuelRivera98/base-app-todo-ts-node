import { RequestHandler } from "express";
import { Todo } from '../models/todo';

const Todos: Todo[] = [{
  id: 'Id1',
  text: 'Soy un texto por default',
}];

export const postFn: RequestHandler = (
  req, res, next,
) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  Todos.push(newTodo);

  res.status(201).json({
    message: 'Su texto fue creado correctamente',
    data: newTodo,
  });
};

export const getFn: RequestHandler = (req, res, next) => {
  res.json({
    message: 'Lista exntregada correctamente',
    data: {
      Todos,
    }
  })
};

export const patchFn: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const { text } = (req.body as { text: string });

  let newTask: Todo;
  let found: Boolean = false;

  Todos.forEach((task, idx) => {

    if (task.id === id) {
      newTask = { id, text };
      Todos[idx] = newTask;
      found = true;
      return;
    }

    found = false;


  });

  if (!found) {
    res.json({
      message: 'No se ha encontrado ninguna tarea con ese Id',
      id,
    })
  }


  res.json({
    message: 'Se ha actualizado correctamente la tarea',
    data: {
      Todos,
    },
  })
};