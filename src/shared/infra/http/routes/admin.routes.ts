import { Router } from 'express';

import {
  CreateContentController,
  createContentValidation,
} from '../../../../modules/admin/useCases/createContent';

import {
  CreateTrailController,
  createTrailValidation,
} from '../../../../modules/admin/useCases/createTrail';

import { DeleteTrailController } from '../../../../modules/admin/useCases/deleteTrail';

import {
  EditTrailController,
  editTrailValidation,
} from '../../../../modules/admin/useCases/editTrail';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

export const adminRoutes = Router();

const createTrailController = new CreateTrailController();
const editTrailController = new EditTrailController();
const deleteTrailController = new DeleteTrailController();

const createContentController = new CreateContentController();

adminRoutes.post(
  '/trails',
  ensureAuthenticated,
  ensureAdmin,
  createTrailValidation,
  createTrailController.handle
);

adminRoutes.patch(
  '/trails/:trailId',
  ensureAuthenticated,
  ensureAdmin,
  editTrailValidation,
  editTrailController.handle
);

adminRoutes.delete(
  '/trails/:trailId',
  ensureAuthenticated,
  ensureAdmin,
  deleteTrailController.handle
);

adminRoutes.post(
  '/trails/:trailId/content',
  ensureAuthenticated,
  ensureAdmin,
  createContentValidation,
  createContentController.handle
);
