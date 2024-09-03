import { health } from '@order/controllers/health';
import express, { Router } from 'express';

const router = express.Router();

export const healthRoutes = (): Router => {
  router.get('/order-health', health);

  return router;
};
