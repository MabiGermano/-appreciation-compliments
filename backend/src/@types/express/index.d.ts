declare namespace Express {
  export interface Request {
    authenticatedUser: string;
  }
}