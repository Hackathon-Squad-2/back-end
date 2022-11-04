import 'dotenv/config';
import 'express-async-errors';

import cors from 'cors';
import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { ConnectDB } from '../../../database';

import { errors } from 'celebrate';
import { router } from './routes';

import apiSchema from '../../../../docs/api.schema.json';
import { errorHandler } from './middlewares/errorHandler';

export const app = express();

ConnectDB().then(() => {
  app.use(cors());

  app.use(express.json());
  app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(apiSchema));

  app.use(router);
  app.use(errors());

  app.use(errorHandler);
});
