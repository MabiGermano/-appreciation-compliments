import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {

  async handle(request: Request, response: Response) {
    const {authenticatedUser} = request;
    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiveComplimentsService.execute(authenticatedUser);

    return response.json(compliments);
  }
}
export { ListUserReceiveComplimentsController }