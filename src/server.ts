require('dotenv').config()

import express from "express";
import compression from "compression";
import cors from "cors";
import errorMiddleware from './middleware/error.middleware';
import requestNotFoundMiddleware from './middleware/requestNotFound.middleware';
import { AuthRoutes } from "./routes/auth";
import { RequestRoutes } from "./routes/requests";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.pageNotFoundHandling();
    this.errorHandling();
  }

  public config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(compression());
    this.app.use(cors());
  }
  public routes(): void {
    this.app.use("/api/auth", new AuthRoutes().router);
    this.app.use("/api/request", new RequestRoutes().router);
  }
  
  public pageNotFoundHandling(): void {
    this.app.use(requestNotFoundMiddleware);
  }

  private errorHandling(): void {
    this.app.use(errorMiddleware);
  }

  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(
        "API is running at http://localhost:%d",
        this.app.get("port")
      );
    });
  }

}

const server = new Server();

server.start();
