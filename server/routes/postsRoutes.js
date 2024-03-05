import { Router } from 'express';
import { getAllPosts, addNewPosts } from '../controllers/postsControllers.js';

const router = Router();

router.get('/', getAllPosts)
router.post('/', addNewPosts)

export default router;