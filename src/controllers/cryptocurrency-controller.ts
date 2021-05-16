import { Request, Response } from 'express';
import { coingeckoApiConsumer } from '../consumer/coingecko-api-consumer';

class CryptocurrencieController{

    public async listAll(req: Request, res: Response){
        const coins: any = await coingeckoApiConsumer.getAllCoins();
        res.send(coins);
    }

}

export const cryptocurrencieController = new CryptocurrencieController();;