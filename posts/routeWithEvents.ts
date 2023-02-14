import { NextFunction, Request, Response, Router } from "express";
import { IPost } from "./interfaces";
import { generateRandomId } from "./utilities";

interface iClient {
  id: number;
  response: Response;
}

const postRouteWithEvents = Router();
const posts: IPost = {};

let clients: iClient[] = [];

function sendEventsToAll(newPost: { id: string; title: string }) {
  clients.forEach((client) =>
    client.response.write(`data: ${JSON.stringify(newPost)}\n\n`)
  );
}

function eventsHandler(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };

  response.writeHead(200, headers);

  const data = `data: ${JSON.stringify(posts)}\n\n`;

  response.write(data);

  const clientId = Date.now();

  const newClient: iClient = {
    id: clientId,
    response,
  };

  clients.push(newClient);

  request.on("close", () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter((client) => client.id !== clientId);
  });
}

function addPosts(request: Request, response: Response, next: NextFunction) {
  const { title } = request.body;
  const id: string = generateRandomId();

  let obj: IPost = {};
    obj[id] = {
      id,
      title,
  };

  posts[id] = {
    id,
    title,
  };

  console.log(obj);
  console.log(title);

  response.json(posts[id]);

  return sendEventsToAll({
    id,
    title,
  });
}

postRouteWithEvents.get("/posts", eventsHandler);

postRouteWithEvents.post("/posts", addPosts);

export { postRouteWithEvents };
