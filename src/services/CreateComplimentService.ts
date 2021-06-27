import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplimentRepository"
import { UserRepository } from "../repositories/UserRepository";

interface ComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: ComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (user_sender === user_receiver) {
      throw new Error("Invalid user receiver!")
    }

    const userReceiverExists = await userRepository.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("User receiver doesn't exist!");
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    });

    await complimentsRepository.save(compliment);
    return compliment;
  }


}
export { CreateComplimentService }