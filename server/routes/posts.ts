import express, { Request, Response } from 'express';
import { getPosts, createPost } from '../controllers/posts';

const router = express.Router();

// http://localhost:3500/posts

router.get('/', getPosts);
router.post('/', createPost);


export default router;
