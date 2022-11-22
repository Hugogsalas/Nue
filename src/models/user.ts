import {Schema, model} from 'mongoose';

export interface User {
  _id: string;
  email: string;
  address: string;
  name: string;
  lastName: string;
  password: string;
  secondLastName: string;
  phone: string;
}

export type RequestUser = Omit<User, 'password'>;

const schema = new Schema<User>({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  address: String,
  lastName: String,
  secondLastName: String,
  phone: String,
});

export const UserModel = model<User>('User', schema);

export interface LoginParams {
  email: string;
  password: string;
}

export interface SigInParams {
  email: string;
  address?: string;
  password: string;
  name?: string;
  lastName?: string;
  secondLastName?: string;
  phone?: string;
}
