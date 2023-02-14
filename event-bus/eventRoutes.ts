import axios from "axios";
import { Request, Response, Router } from "express";

const eventRoutes = Router();

// TODO: fix type any
const events:any = [];

eventRoutes.post("/events", (req: Request, res: Response) => {
  const event = req.body;

  events.push(event);

  console.log({ "Event Bus!": event });

  // posts service
  axios
    .post("http://localhost:4000/events", event)
    .catch((err) => console.log(err));

  // comments service
  axios
    .post("http://localhost:4001/events", event)
    .catch((err) => console.log(err));

  // query service
  axios
    .post("http://localhost:4002/events", event)
    .catch((err) => console.log(err));

  // moderation service
  axios
    .post("http://localhost:4003/events", event)
    .catch((err) => console.log(err));

  res.send({ status: "OK" });
});

eventRoutes.get("/events", (req: Request, res: Response) => {
  res.send(events);
});

export { eventRoutes };
