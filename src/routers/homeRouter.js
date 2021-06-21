import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/user', homeController.index);
router.post('/user', homeController.store);

export default router;
