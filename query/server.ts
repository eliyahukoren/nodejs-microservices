import cors from "cors";
import express, { Express } from "express";
import { queryRoute } from "./queryRoutes";

const createQueryServer = (): Express => {
  const app: Express = express();

  const allowedOrigins = ["http://localhost:3000"];
  const options: cors.CorsOptions = {
    origin: allowedOrigins,
  };

  app.use(cors(options));

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/", queryRoute);

  return app;
};

export { createQueryServer };
