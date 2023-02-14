import axios from "axios";
import { Request, Response, Router } from "express";
import { IPost } from "./interfaces";
import { generateRandomId } from "./utilities";

const postRoute = Router();
const posts: IPost = {};


postRoute.get("/posts", (req: Request, res: Response): void => {
  res.status(200).send(posts);
});


postRoute.post("/posts", async (req: Request, res: Response) => {
  const { title } = req.body;
  const id: string = generateRandomId();

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events",{
    type: "PostCreated",
    data: {
      id, title
    }
  });


  res.status(201).send(posts[id]);
});

postRoute.post("/events", (req: Request, res: Response) => {
  console.log("Posts - Received event:", req.body.type)

  res.send({});
});

export { postRoute };
