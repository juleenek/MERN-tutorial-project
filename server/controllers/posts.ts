import express, { Request, Response } from 'express';
import PostMessage from '../models/postMessage';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
};

export const createPost = async (req: Request, res: Response) => {
  res.send(`CREATED!`);
};
