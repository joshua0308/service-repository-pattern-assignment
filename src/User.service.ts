import { injectable } from "inversify";
import { UserRequestDto } from './Database'
import { UserRepository } from './User.repository'

@injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {};

  getUsers() {
    return this.userRepo.getUsers();
  }

  async createUser(user: UserRequestDto) {
    const createdUser = await this.userRepo.createUser(user);
    return createdUser;
  }
}
