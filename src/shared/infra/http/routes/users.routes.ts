import { Router } from 'express';

import {
  LoginUserController,
  loginUserValidation,
} from '../../../../modules/users/useCases/loginUser';

import {
  registerUserValidation,
  RegisterUserController,
} from '../../../../modules/users/useCases/registerUser';

export const usersRoutes = Router();

const loginUserController = new LoginUserController();
const registerUserController = new RegisterUserController();

usersRoutes.post(
  '/auth/register',
  registerUserValidation,
  registerUserController.handle
);

usersRoutes.post(
  '/auth/login',
  loginUserValidation,
  loginUserController.handle
);
