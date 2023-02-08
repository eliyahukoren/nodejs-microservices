import cors from 'cors';
import express, { Express } from "express";
import { postRoute } from "./routes";

const createPostsServer = (): Express => {
  const app: Express = express();

  const allowedOrigins = ['http://localhost:3000']
  const options: cors.CorsOptions = {
    origin: allowedOrigins
  }

  app.use(cors(options));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/", postRoute);

  return app;
};

export { createPostsServer };
