import { randomBytes } from "crypto";
import { Request, Response, Router } from "express";

const postRoute = Router();

interface IPost {
  [key: string]: {
    id?: string;
    title?: string;
  };
}

const posts: IPost = {};

const generateRandomId = (): string => {
  return randomBytes(4).toString("hex");
};


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
