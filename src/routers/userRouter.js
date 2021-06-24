import { Router } from 'express';
import UserControoler from '../controllers/UserControoler';

const router = new Router();

router.get('/', UserControoler.index);
router.post('/', UserControoler.store);
router.get('/:id', UserControoler.show);
router.put('/:id', UserControoler.update);
router.delete('/:id', UserControoler.delete);

export default router;
