import { Router } from 'express';

import {
  registerUserValidation,
  RegisterUserController,
} from '../../../../modules/users/useCases/registerUser';

export const usersRoutes = Router();

const registerUserController = new RegisterUserController();

usersRoutes.post(
  '/auth/register',
  registerUserValidation,
  registerUserController.handle
);
