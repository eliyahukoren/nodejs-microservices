import express, { Express } from "express";
import { commentRoute } from "./routes";

const createCommentsServer = (): Express => {
  const app: Express = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/", commentRoute);

  return app;
};

export { createCommentsServer };
