import 'dotenv/config'
import 'reflect-metadata'

import { UserRepository } from './User.repository'
import { UserService } from './User.service'
import { Container } from "inversify"
import { InversifyExpressServer } from "inversify-express-utils"

import "./User.controller"

export async function Bootstrap() {
  const container = new Container();

  container.bind(UserRepository).toSelf();
  container.bind(UserService).toSelf();

  const server = new InversifyExpressServer(container);

  const app = server.build();

  app.listen(5000, () => console.log(`server connected on http://localhost:5000/`))
}

Bootstrap()