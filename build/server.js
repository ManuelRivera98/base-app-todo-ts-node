"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var todo_1 = __importDefault(require("./routes/todo"));
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
// handle errors
/* app.use((err: Error, res: Response, req: Request, next: NextFunction) => {
  res.status(401).json({
    message: err.message,
  });
}); */
app.use('/todo', todo_1.default);
app.listen(3000, function () {
    console.log('Run on port 3000');
});
