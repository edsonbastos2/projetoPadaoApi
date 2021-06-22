import { Router } from 'express';
import Username from '../controllers/UsernameController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, Username.index);
router.post('/', Username.store);
router.get('/:id', Username.show);
router.put('/:id', Username.update);
router.delete('/:id', Username.delete);

export default router;
