import { Request, Response } from 'express';

class CryptocurrencieController{

    public listAll(req: Request, res: Response){
        res.send("{title: 'Welcome'}");
    }

}


export const cryptocurrencieController = new CryptocurrencieController();;