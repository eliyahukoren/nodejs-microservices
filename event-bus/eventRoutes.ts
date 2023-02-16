/*
  Possible body for events:

  create post:
  { type: 'PostCreated', data: { id: '13ea85be', title: 'New Post' } }


  create comment:
  {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId,
      status: "pending",
    },
  }
  moderate comment:
  {
    type: "CommentModerated",
    data: {
      id: data.id,
      postId: data.postId,
      status,
      content: data.content,
    },
  }
*/

import axios from "axios";
import { Request, Response, Router } from "express";

const eventRoutes = Router();

const servicesList = {
  posts: "http://posts-clusterip-srv:4000/events",
  comments: "http://comments-srv:4001/events",
  query: "http://query-srv:4002/events",
  moderation: "http://moderation-srv:4003/events",
};

interface IEventData {
  [type: string]: {
    data: {
      id: string;
      title?: string;
      content?: string;
      postId?: string;
      status?: string;
    };
  };
}

const events: IEventData[] = [];

eventRoutes.post("/events", (req: Request, res: Response) => {
  const event: IEventData = req.body;

  events.push(event);

  console.log({ "Event Bus!": event });

  // posts service
  axios.post(servicesList.posts, event).catch((err) => console.log(err));

  // comments service
  axios.post(servicesList.comments, event).catch((err) => console.log(err));

  // query service
  axios.post(servicesList.query, event).catch((err) => console.log(err));

  // moderation service
  axios.post(servicesList.moderation, event).catch((err) => console.log(err));

  res.send({ status: "OK" });
});

eventRoutes.get("/events", (req: Request, res: Response) => {
  res.send(events);
});

export { eventRoutes };
