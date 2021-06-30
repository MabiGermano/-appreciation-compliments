import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {

  async handle(request: Request, response: Response) {
    const {authenticatedUser} = request;
    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const compliments = await listUserSendComplimentsService.execute(authenticatedUser);

    return response.json(compliments);
  }
}
export { ListUserSendComplimentsController }