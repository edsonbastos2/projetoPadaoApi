import { Router } from 'express';
import Username from '../controllers/UsernameController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', Username.index);
router.get('/:id', Username.show);
router.post('/', Username.store);
router.put('/', loginRequired, Username.update);
router.delete('/', loginRequired, Username.delete);

export default router;
