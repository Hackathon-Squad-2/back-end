import 'dotenv/config';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';

import { ConnectDB } from '../../../database';

import { router } from './routes';

import apiSchema from '../../../../docs/api.schema.json';
import { AppError } from '../../errors/AppError';

export const app = express();

ConnectDB().then(() => {
  app.use(express.json());
  app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(apiSchema));

  app.use(router);

  app.use(
    (err: Error, _request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          code: err.statusCode,
          message: err.message,
        });
      }

      next(err);
    }
  );
});
