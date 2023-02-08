import cors from 'cors';
import express, { Express } from "express";
import { commentRoute } from "./routes";

const createCommentsServer = (): Express => {
  const app: Express = express();

  const allowedOrigins = ["http://localhost:3000"];
  const options: cors.CorsOptions = {
    origin: allowedOrigins,
  };

  app.use(cors(options));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/", commentRoute);

  return app;
};

export { createCommentsServer };
