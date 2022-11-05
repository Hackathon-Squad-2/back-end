import { Router } from 'express';

import { UserProfileController } from '../../../../modules/users/useCases/userProfile';
import { SignCoursesController } from '../../../../modules/users/useCases/signCourses';
import { UnsignCourseController } from '../../../../modules/users/useCases/unsignCourse';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

export const usersRoutes = Router();

const userProfileController = new UserProfileController();
const signCoursesController = new SignCoursesController();
const unsignCouseController = new UnsignCourseController();

usersRoutes.get('/me', ensureAuthenticated, userProfileController.handle);

usersRoutes.post(
  '/courses/sign',
  ensureAuthenticated,
  signCoursesController.handle
);

usersRoutes.post(
  '/courses/unsign/:trailId',
  ensureAuthenticated,
  unsignCouseController.handle
);
