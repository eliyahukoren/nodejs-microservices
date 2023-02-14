import express, { Express } from "express";
import { eventRoutes } from "./eventRoutes";

const createEventServer = () => {

  const app: Express = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/", eventRoutes);

  return app;
}

export { createEventServer };
