import { Router } from 'express';
import { postFn, getFn, patchFn } from '../controllers/todo';

const router = Router();

router.post('/', postFn);
router.get('/', getFn);
router.patch('/:id', patchFn);
router.delete('/:id');

export default router;