import mongoose, { Schema, model} from 'mongoose';

export interface UserCryptocurrency extends mongoose.Document{
    username: String,
    name: String,
    symbol: String,
    priceARS: String,
    priceUSD: String,
    priceEUR: String,
    image: String,
    lastUpdateDate: String
}

const UserCryptocurrencySchema = new Schema({
    username: String,
    name: String,
    symbol: String,
    priceARS: String,
    priceUSD: String,
    priceEUR: String,
    image: String,
    lastUpdateDate: String
});

export default model<UserCryptocurrency>('UserCryptocurrency', UserCryptocurrencySchema);