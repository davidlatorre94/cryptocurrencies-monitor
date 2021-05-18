import { Request, Response } from "express";
import UserModel, { User } from "../modelsDao/user";

class UserController {
  public async createUser(req: Request, res: Response) {
    const { username, name, apellido, password, preferendCurrency } = req.body;
    const user: User = new UserModel({
      username,
      name,
      apellido,
      password,
      preferendCurrency,
    });
    await user.save();
    res.send("{Usuario registrado satisfactoriamente}");
  }

  public async addCryptocurrencies(req: Request, res: Response) {
    res.send("{title: 'Welcome'}");
  }

  public async topCryptocurrencies(req: Request, res: Response) {
    const users: User[] = await UserModel.find();
    res.send(JSON.stringify(users));
  }
}

export const userController = new UserController();
