import  {Router ,Request, Response } from 'express';
// app = Route
const app = Router();
app.get('/s', (req: Request, res: Response) => {
  res.send('Hello, Users!');
});
export default app; 