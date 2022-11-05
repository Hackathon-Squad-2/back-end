import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { usersRoutes } from './users.routes';

export const router = Router();

router.use('/users', usersRoutes);
router.use('/users/auth', authRoutes);
