import { Request, Response } from 'express';
import User from '../models/user';

class UserController{

    public createUser(req: Request, res: Response){
        new User();
        res.send("{title: 'Welcome'}");
    }

    public addCryptocurrencies(req: Request, res: Response){
        res.send("{title: 'Welcome'}");
    }

    public topCryptocurrencies(req: Request, res: Response){
        res.send("{title: 'Welcome'}");
    }

}


export const userController = new UserController();;