import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { authRoutes } from './auth.routes';
import { adminRoutes } from './admin.routes';
import { trailsRoutes } from './trails.routes';

export const router = Router();

router.use('/users', usersRoutes);
router.use('/users/auth', authRoutes);

router.use('/admin', adminRoutes);

router.use('/trails', trailsRoutes);
