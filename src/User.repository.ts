import { injectable } from "inversify";
import Database, { UserRequestDto } from './Database'

@injectable()
export class UserRepository {
  public readonly db = Database;

  getUsers() {
    return this.db.all();
  }

  async createUser(user: UserRequestDto) {
    const userCreated = await this.db.create(user)
    return userCreated;
  }
}
