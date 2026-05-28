import type { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError.js";

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
    return;
  }

  // Unknown error
  console.error(`Internal server error ${err}`);

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}
