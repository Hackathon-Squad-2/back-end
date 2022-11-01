import 'dotenv/config';
import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (_request: Request, response: Response) => {
  return response.status(200).json({ message: 'Hello, World!' });
});

app.listen(3000, () => console.log('Server is running on port 3000!'));
