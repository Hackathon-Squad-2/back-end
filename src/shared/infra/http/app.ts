import 'dotenv/config';
import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { ConnectDB } from '../../../database';

import { router } from './routes';

import apiSchema from '../../../../docs/api.schema.json';

export const app = express();

ConnectDB().then(() => {
  app.use(express.json());
  app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(apiSchema));

  app.use(router);
});
