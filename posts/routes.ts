import { Request, Response, Router } from "express";
import { IPost } from "./interfaces";
import { generateRandomId } from "./utilities";

const postRoute = Router();
const posts: IPost = {};


postRoute.get("/posts", (req: Request, res: Response): void => {
  res.status(200).send(posts);
});

postRoute.post("/posts", (req: Request, res: Response): void => {
  const { title } = req.body;
  const id: string = generateRandomId();

  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});


export { postRoute };
