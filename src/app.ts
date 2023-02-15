import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import authRouter from "./router/authRoutes";
import mongoose from "mongoose";
dotenv.config();

export const app: Application = express();

app.use(express.json());
app.use(authRouter);

mongoose
  .connect(
    "mongodb+srv://test:somepassword1@cluster0.l8o49ah.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    const PORT = process.env.PORT;

    app.listen(
      PORT,
      (): void => void console.log(`Server is running on port ${PORT}!`)
    );
  })
  .catch((err) => void console.error(err));
