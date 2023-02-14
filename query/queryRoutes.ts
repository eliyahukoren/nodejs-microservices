import { Request, Response, Router } from "express";
import getQueryService from "./QueryService";

const queryRoute = Router();
const queryService = getQueryService();


/*
  post object example:
  {
    'ae34gh': {
      id: 'ae34gh',
      title: 'Post Title',
      comments: [
        {id: 'ab12cd34', content: 'Comment #1'},
        {id: 'ab34eg7g', content: 'Comment #2'},
        ...
      ]
    },
    ...
  }
*/

// request from React app (client)
queryRoute.get("/posts", (req: Request, res: Response): void => {
  res.status(200).send(queryService.posts);
});

// receive events from event bus
queryRoute.post("/events", (req: Request, res: Response): void => {
  const {type, data} = req.body;

  queryService.handleEvent({ type, data });

  console.log({ queryService: queryService.posts });

  res.status(200).send({});
});


export { queryRoute };
