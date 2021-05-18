import mongoose, { Schema, model } from "mongoose";

export interface User extends mongoose.Document {
  username: String;
  name: String;
  apellido: String;
  password: String;
  preferendCurrency: String;
}

const UserSchema = new Schema({
  username: String,
  name: String,
  apellido: String,
  password: String,
  preferendCurrency: String,
});

export default model<User>("User", UserSchema);
