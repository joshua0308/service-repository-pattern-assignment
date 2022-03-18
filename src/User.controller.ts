import { controller, httpGet } from "inversify-express-utils";
import { UserRequestDto } from './Database'
import { UserService } from './User.service'

@controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {};

  @httpGet('/')
  async index() {
    const users = await this.userService.getUsers();
    console.log(users)
    return `current users: ${users.length}`
  }

  async store(user: UserRequestDto) {
    const userCreated = await this.userService.createUser(user);
    return userCreated;
  }
}
