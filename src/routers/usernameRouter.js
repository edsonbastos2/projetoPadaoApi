import { Router } from 'express';
import Username from '../controllers/UsernameController';

const router = new Router();

router.get('/', Username.index);
router.post('/', Username.store);

export default router;
