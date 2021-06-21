import { Router } from 'express';
import Username from '../controllers/UsernameController';

const router = new Router();

router.get('/', Username.index);
router.post('/', Username.store);
router.get('/:id', Username.show);
router.put('/:id', Username.update);

export default router;
