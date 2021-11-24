import server, { Response, Request, NextFunction } from 'express';
import { json } from 'body-parser';
import todoRoutes from './routes/todo';

const app = server();

app.use(json());

// handle errors
/* app.use((err: Error, res: Response, req: Request, next: NextFunction) => {
  res.status(401).json({
    message: err.message,
  });
}); */

app.use('/todo', todoRoutes);

app.listen(3000, () => {
  console.log('Run on port 3000');
});