import 'dotenv/config';
import 'express-async-errors';

import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';

import { AppError } from '../../errors/AppError';
import { ConnectDB } from '../../../database';

import { errors } from 'celebrate';
import { router } from './routes';

import apiSchema from '../../../../docs/api.schema.json';

export const app = express();

ConnectDB().then(() => {
  app.use(cors());
  app.use(express.json());
  app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(apiSchema));

  app.use(router);
  app.use(errors());

  app.use(
    (err: Error, _request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          message: err.message,
        });
      }

      next(err);
    }
  );
});
