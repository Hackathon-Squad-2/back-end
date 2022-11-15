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

import { GetTrailProgressController } from '../../../../modules/users/useCases/getTrailProgress';
import { GetContentProgressController } from '../../../../modules/users/useCases/getContentProgress';
import { CreateProgressController } from '../../../../modules/users/useCases/createProgress';

import {
  UpdateProgressController,
  updateProgressValidation,
} from '../../../../modules/users/useCases/updateProgress';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';
import { GetTrailInfoController } from '../../../../modules/users/useCases/getTrailInfo';

export const usersRoutes = Router();

const userProfileController = new UserProfileController();
const signCoursesController = new SignCoursesController();
const unsignCouseController = new UnsignCourseController();

const getCoursesController = new GetCoursesController();
const getCourseTrailController = new GetCourseTrailController();

const getTrailProgressController = new GetTrailProgressController();
const getContentProgressController = new GetContentProgressController();
const createProgressController = new CreateProgressController();
const updateProgressController = new UpdateProgressController();

const getTrailInfoController = new GetTrailInfoController();

usersRoutes.get('/me', ensureAuthenticated, userProfileController.handle);

usersRoutes.get(
  '/me/courses/:trailId/info',
  ensureAuthenticated,
  getTrailInfoController.handle
);

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

usersRoutes.get(
  '/me/courses/:trailId/progress',
  ensureAuthenticated,
  getTrailProgressController.handle
);

usersRoutes.get(
  '/me/courses/:trailId/progress/:contentId',
  ensureAuthenticated,
  getContentProgressController.handle
);

usersRoutes.post(
  '/me/courses/:trailId/progress/:contentId',
  ensureAuthenticated,
  createProgressController.handle
);

usersRoutes.patch(
  '/me/courses/:trailId/progress/:contentId',
  ensureAuthenticated,
  updateProgressValidation,
  updateProgressController.handle
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
