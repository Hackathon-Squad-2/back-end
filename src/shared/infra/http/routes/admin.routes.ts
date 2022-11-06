import { Router } from 'express';

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
