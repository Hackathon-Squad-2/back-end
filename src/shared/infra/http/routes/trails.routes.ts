import { Router } from 'express';

import { GetTrailContentsController } from '../../../../modules/trails/useCases/getTrailContents';
import { GetTrailsController } from '../../../../modules/trails/useCases/getTrails';

export const trailsRoutes = Router();

const getTrailsController = new GetTrailsController();
const getTrailContentsController = new GetTrailContentsController();

trailsRoutes.get('/', getTrailsController.handle);

trailsRoutes.get('/:trailId/content', getTrailContentsController.handle);
