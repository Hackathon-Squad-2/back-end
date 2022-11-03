import { Router } from 'express';

import {
  createUserValidation,
  CreateUserController,
} from '../../../../modules/users/useCases/createUser';

export const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post(
  '/auth/register',
  createUserValidation,
  createUserController.handle
);
