import { Router } from 'express';
import { posts, createPosts } from '../controllers/postsControllers.js';

const router = Router();

router.get('/', posts)
router.post('/', createPosts)

export default router;