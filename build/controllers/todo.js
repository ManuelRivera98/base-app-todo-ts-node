"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchFn = exports.getFn = exports.postFn = void 0;
var todo_1 = require("../models/todo");
var Todos = [{
        id: 'Id1',
        text: 'Soy un texto por default',
    }];
var postFn = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    Todos.push(newTodo);
    res.status(201).json({
        message: 'Su texto fue creado correctamente',
        data: newTodo,
    });
};
exports.postFn = postFn;
var getFn = function (req, res, next) {
    res.json({
        message: 'Lista exntregada correctamente',
        data: {
            Todos: Todos,
        }
    });
};
exports.getFn = getFn;
var patchFn = function (req, res, next) {
    var id = req.params.id;
    var text = req.body.text;
    var newTask;
    var found = false;
    Todos.forEach(function (task, idx) {
        if (task.id === id) {
            newTask = { id: id, text: text };
            Todos[idx] = newTask;
            found = true;
            return;
        }
        found = false;
    });
    if (!found) {
        res.json({
            message: 'No se ha encontrado ninguna tarea con ese Id',
            id: id,
        });
    }
    res.json({
        message: 'Se ha actualizado correctamente la tarea',
        data: {
            Todos: Todos,
        },
    });
};
exports.patchFn = patchFn;
