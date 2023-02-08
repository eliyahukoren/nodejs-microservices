import express, { Express } from "express";
import { postRoute } from "./routes";

const createPostsServer = (): Express => {
  const app: Express = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/", postRoute);

  return app;
};

export { createPostsServer };
