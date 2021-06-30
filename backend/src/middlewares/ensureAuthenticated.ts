import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub:string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;
  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(" ");
  try {
    const {sub } = verify(token, "92313c8a9a956f15d218f144262b2292") as Payload;
    request.authenticatedUser = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}