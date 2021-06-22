import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);
router.post('/', homeController.store);
router.get('/:id', homeController.show);
// router.put('/:id', homeController.update);

export default router;
