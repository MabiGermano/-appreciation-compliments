import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository"

interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: UserRequest) {
    const usersRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email incorrect")
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }

    const user = usersRepository.create(
      { 
        name, 
        email, 
        admin 
      });

      await usersRepository.save(user);

      return user;
  }
}

export { CreateUserService }