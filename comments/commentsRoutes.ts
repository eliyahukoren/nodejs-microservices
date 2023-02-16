import axios from "axios";
import { Request, Response, Router } from "express";
import { ICommentsByPostId } from "./interfaces";
import { generateRandomId } from "./utilities";

const commentRoute = Router();
const commentsByPostId: ICommentsByPostId = {};
const eventService = { host: "http://event-bus-srv:4005/events" };


commentRoute.get("/posts/:id/comments", (req: Request, res: Response): void => {
  res.status(200).send(commentsByPostId[req.params.id] || []);
});

commentRoute.post("/posts/:id/comments", async (req: Request, res: Response) => {
  const commentId = generateRandomId();
  const postId = req.params.id;
  const { content } = req.body;

  const comments = commentsByPostId[postId] || [];

  comments.push({id: commentId, content, status: "pending"});
  commentsByPostId[postId] = comments;

  const event = {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId,
      status: "pending",
    },
  };

  await axios.post(eventService.host, event);

  res.status(201).send(comments);
});

commentRoute.post("/events", async (req: Request, res: Response) => {
  console.log("Comments - Received event:", req.body.type);

  const { type, data, content} = req.body;

  if(type === "CommentModerated"){
    const {postId, id, status, content} = data;

    const comments = commentsByPostId[postId];
    const comment = comments.find(comment => comment.id === id);

    if( comment ){
      comment.status = status;

      await axios.post(eventService.host, {
        type: "CommentUpdated",
        data: {
          id, status, postId, content
        }
      }).catch(err => console.log(err))

    }


  }

  res.send({});
});


export { commentRoute };
