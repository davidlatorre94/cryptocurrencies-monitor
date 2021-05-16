import mongoose, { Schema, model} from 'mongoose';

export interface User extends mongoose.Document{
    id: Number,
    name: String
}

const UserSchema = new Schema({
    id: Number,
    name: String
});

export default model<User>('User', UserSchema);