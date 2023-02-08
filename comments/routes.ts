import { Request, Response, Router } from "express";
import { ICommentsByPostId } from "./interfaces";
import { generateRandomId } from "./utilities";

const commentRoute = Router();
const commentsByPostId: ICommentsByPostId = {};


commentRoute.get("/posts/:id/comments", (req: Request, res: Response): void => {
  console.log(req.params);
  console.log(commentsByPostId);

  res.status(200).send(commentsByPostId[req.params.id] || []);
});

commentRoute.post("/posts/:id/comments", (req: Request, res: Response): void => {
  const commentId = generateRandomId();
  const postId = req.params.id;
  const { content } = req.body;
  console.log(req.body);

  const comments = commentsByPostId[postId] || [];

  comments.push({id: commentId, content});
  commentsByPostId[postId] = comments;

  res.status(201).send(comments);
});


export { commentRoute };
