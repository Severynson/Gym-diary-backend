import { Request, Response } from "express";
import { AUTH_ROUTES } from "./routes";
import bcrypt from "bcrypt";

import express from "express";

const authRouter = express.Router();

authRouter.post(
  `/${AUTH_ROUTES.AUTHENTICATION}/sign-up`,
  (req: Request, res: Response): void => {
    res.json({ registeredSuccessful: true });
  }
);

authRouter.post(
  `/${AUTH_ROUTES.AUTHENTICATION}/sign-in`,
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password: ", hashedPassword);
    res.json({ idToken: "AZAZ, not token. Response is here!" });
  }
);

export default authRouter;
