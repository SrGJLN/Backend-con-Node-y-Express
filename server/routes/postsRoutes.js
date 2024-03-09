import { Router } from 'express';
import { getPostController, 
    createPostController, 
    updatePostController, 
    deletePostController } from '../controllers/postsControllers.js';

const router = Router();

router.get('/', getPostController)
router.post('/', createPostController)
router.put("/like/:id", updatePostController);
router.delete("/:id", deletePostController);

export default router;