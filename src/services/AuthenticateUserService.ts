import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface AuthenticationRequest {
  email: string,
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: AuthenticationRequest) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        email: user.email
      },
      "92313c8a9a956f15d218f144262b2292",
      {
        subject: user.id,
        expiresIn: "1d"
      })
      return token;
  }
}

export {AuthenticateUserService}