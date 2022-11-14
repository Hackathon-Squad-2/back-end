import { Router } from 'express';

import { GetTrailsController } from '../../../../modules/trails/useCases/getTrails';

export const trailsRoutes = Router();

const getTrailsController = new GetTrailsController();

trailsRoutes.get('/', getTrailsController.handle);
