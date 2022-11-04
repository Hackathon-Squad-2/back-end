import { Router } from 'express';

import {
  LoginUserController,
  loginUserValidation,
} from '../../../../modules/users/useCases/loginUser';

import {
  registerUserValidation,
  RegisterUserController,
} from '../../../../modules/users/useCases/registerUser';

import { UserProfileController } from '../../../../modules/users/useCases/userProfile';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

export const usersRoutes = Router();

const loginUserController = new LoginUserController();
const registerUserController = new RegisterUserController();
const userProfileController = new UserProfileController();

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

usersRoutes.get('/me', ensureAuthenticated, userProfileController.handle);
