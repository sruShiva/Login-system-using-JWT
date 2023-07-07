import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import IUser from '../interfaces/user';

// interface IUser {
//     username:string;
//     password:string;
//   }
const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true }
    },
    {
        timestamps: true
    }
);


export default mongoose.model<IUser>('User', UserSchema);