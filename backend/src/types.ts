import { Types } from 'mongoose';

export interface IUser {
  role: string;
  _id: Types.ObjectId;
  email: string;
  password: string;
}
