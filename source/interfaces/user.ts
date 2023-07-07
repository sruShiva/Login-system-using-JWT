import mongoose from "mongoose";
import {Document} from 'mongoose';

interface IUser extends Document{
    username:string;
    password:string;
}
export default IUser