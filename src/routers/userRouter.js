import { Router } from 'express';
import UserControoler from '../controllers/UserControoler';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', UserControoler.index);
router.post('/', loginRequired, UserControoler.store);
router.get('/:id', UserControoler.show);
router.put('/:id', loginRequired, UserControoler.update);
router.delete('/:id', loginRequired, UserControoler.delete);

export default router;
