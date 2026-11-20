import { Context, Hono, TypedResponse } from "hono";
import { UsersRepository } from "./users.repository";
import { ApplicationResult } from "../application.types";
import {UserType} from './users.types';

export class UsersController {
  constructor(private readonly repository: UsersRepository) {}

  public routes(): Hono {
    return new Hono();
  }
  public async findAll(
    c: Context<ApplicationEnvironment>
  ): Promise<TypedResponse<ApplicationResult<UserType[]>>> {
    return c.json({
      success: true,
      data: this.repository.findAll(),
    });
}

public async findById(
  c: context< 
  ApplicationEnvironment,
  "/:id",
  { out: {param: IDParamType} }
  >
): Promise<TypedResponse<ApplicationResult<UserType>>>{
  const {id} = c.req.valid("param");
  const user = this.repository.findById(id);

  if (!user) {
    return c.json({ success: false, error: "User not found" }, 404 );
  }

    return c.json({
      success: true,
      data: user,
    });
  }
}
