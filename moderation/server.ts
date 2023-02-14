import express, { Express } from "express";
import { moderationRoute } from "./moderationRoutes";

const createModerationServer = (): Express => {
  const app: Express = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/", moderationRoute);

  return app;
};

export { createModerationServer };
