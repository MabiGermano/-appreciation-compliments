import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmins";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

router.post(
  "/users",
  createUserController.handle
);

router.post(
  "/login",
  authenticateUserController.handle
);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/complimets/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);

router.get(
  "/users/complimets/receive",
  listUserReceiveComplimentsController.handle
);

export { router }