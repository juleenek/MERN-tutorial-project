import express, { Request, Response } from 'express';
import PostMessage from '../models/postMessage';
import { Post } from '../interfaces/post';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const post: Post = req.body as Post;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    // 409 Conflict
    res.status(409).json({ message: (error as Error).message });
  }
};
