import mongoose, { Schema, model} from 'mongoose';

export interface Cryptocurrency extends mongoose.Document{
    username: String,
    name: String,
    price: String,
    image: String,
    lastUpdateDate: String
}

const CryptocurrencySchema = new Schema({
    username: String,
    name: String,
    price: String,
    image: String,
    lastUpdateDate: String
});

export default model<Cryptocurrency>('Cryptocurrency', CryptocurrencySchema);