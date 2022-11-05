import { Router } from 'express';

import {
  CreateTrailController,
  createTrailValidation,
} from '../../../../modules/admin/useCases/createTrail';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

export const adminRoutes = Router();

const createTrailController = new CreateTrailController();

adminRoutes.post(
  '/trails',
  ensureAuthenticated,
  ensureAdmin,
  createTrailValidation,
  createTrailController.handle
);
