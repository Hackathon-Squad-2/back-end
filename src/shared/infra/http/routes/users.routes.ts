import { Router } from 'express';

import { UserProfileController } from '../../../../modules/users/useCases/userProfile';

import {
  SignCoursesController,
  signCoursesValidation,
} from '../../../../modules/users/useCases/signCourses';

import {
  unsigCourseValidation,
  UnsignCourseController,
} from '../../../../modules/users/useCases/unsignCourse';

import { GetCoursesController } from '../../../../modules/users/useCases/getCourses';
import { GetCourseTrailController } from '../../../../modules/users/useCases/getCourseTrail';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

export const usersRoutes = Router();

const userProfileController = new UserProfileController();
const signCoursesController = new SignCoursesController();
const unsignCouseController = new UnsignCourseController();

const getCoursesController = new GetCoursesController();
const getCourseTrailController = new GetCourseTrailController();

usersRoutes.get('/me', ensureAuthenticated, userProfileController.handle);

usersRoutes.get(
  '/me/courses',
  ensureAuthenticated,
  getCoursesController.handle
);

usersRoutes.get(
  '/me/courses/:trailId',
  ensureAuthenticated,
  getCourseTrailController.handle
);

usersRoutes.post(
  '/courses/sign',
  ensureAuthenticated,
  signCoursesValidation,
  signCoursesController.handle
);

usersRoutes.post(
  '/courses/unsign/:trailId',
  ensureAuthenticated,
  unsigCourseValidation,
  unsignCouseController.handle
);
