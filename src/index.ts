import 'dotenv/config';
import express from 'express';
import { Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';

import { ConnectDB, prisma } from './database';

import apiSchema from '../docs/api.schema.json';

const app = express();
app.use(express.json());

ConnectDB();

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(apiSchema));

app.get('/', (_request: Request, response: Response) => {
  return response.status(200).json({ message: 'Hello, World!' });
});

app.post('/api/users', async (request: Request, response: Response) => {
  const { name, email, password } = request.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return response.status(201).json(user);
});

app.listen(3000, () => console.log('Server is running on port 3000!'));
