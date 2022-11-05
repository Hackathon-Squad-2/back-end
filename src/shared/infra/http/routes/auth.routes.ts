import { Router } from 'express';

import {
  LoginUserController,
  loginUserValidation,
} from '../../../../modules/users/useCases/loginUser';
import {
  RegisterUserController,
  registerUserValidation,
} from '../../../../modules/users/useCases/registerUser';

export const authRoutes = Router();

const registerUserController = new RegisterUserController();
const loginUserController = new LoginUserController();

authRoutes.post(
  '/register',
  registerUserValidation,
  registerUserController.handle
);

authRoutes.post('/login', loginUserValidation, loginUserController.handle);
