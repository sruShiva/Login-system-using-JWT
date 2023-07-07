import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../models/user'
import signJWT from '../functions/signJWT';

const NAMESPACE="Users";

const validatetoken = (req: Request, res: Response, next: NextFunction) => {
   logging.info(NAMESPACE,"Token validated, user authorised")
   return res.status(200).json({
    message:"Authorised"
   })
};


const register = (req: Request, res: Response, next: NextFunction) => {
   
    let{username,password}=req.body;
    
    User.findOne({ username })
    .exec()
    .then((existingUser: any) => {
        if (existingUser) {
            return res.status(409).json({
                message: 'Username already exists',
            });
           
        

        }
    // .catch((error:any) =>{
    //     return res.status(500).json({
    //        message: error.message,
    //        error
    //     })
    // });

    
    else{
    
            if (password.length < 8) {
                        
                return res.status(400).json({
                    message: 'Password should be at least 8 characters long',
                });
            }
        else{
    bcryptjs.hash(password,10,(hashError,hash)=>{
        if(hashError){
            res.status(500).json({
                message:hashError.message,
                error:hashError


            })
        }
        //insert user into DB here
        const _user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            password:hash
        });
        return _user
        .save()
        .then((user:any) =>{
            return res.status(201).json({
                _user: user
            });
        })
        .catch((error:any) =>{
             return res.status(500).json({
                message: error.message,
                error
             })
        })
    });

}
    }
    });
}
const login = (req: Request, res: Response, next: NextFunction) => {
   let {username,password} =req.body;
   User.find({username})
   .exec()
   .then(users =>{
    if(users.length!=1){
        return res.status(401).json({
            message:'Unauthorised'
        })
    }
    bcryptjs.compare(password,users[0].password,(error,result)=>{
        if(error){
            logging.error(NAMESPACE, error.message,error);
            return res.status(401).json({
                message:'Unauthorised'


        });
    }

    else if(result)
    {
        signJWT(users[0],(_error,token)=>{
            if(_error){

                logging.error(NAMESPACE,"Unable to sign token: ",_error);
                return res.status(401).json({
                    message:'Unauthorized',
                    error:_error
                })


            }
            else if(token){
                return res.status(200).json({
                    message:'Auth successful',
                    token,
                    user:users[0]
                })



            }


        })
    }
    
    });
   })
   .catch((error)=>{
    return res.status(500).json({
        message: error.message,
        error


   });

   });

};
const getAllusers = (req: Request, res: Response, next: NextFunction) => {
   User.find()
   .select('-password')
   .exec()
   .then(users=>{
    return res.status(200).json({
        users,
        count:users.length
    })
   })
   .catch((error)=>{
    return res.status(500).json({
        message: error.message,
        error


   });

   });
};



const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body

    console.log(req.body)
    User.findOne({ username })
    //User.findByIdAndRemove(username)
        .exec()
        .then((existingUser:any) => {
            console.log(existingUser)
            if (!existingUser) {
                return res.status(200).json({
                    message: 'User not found',
                });

            }
            console.log("helluuu");
            existingUser.deleteOne()
            
            .then(() => {
                return res.status(200).json({
                    message: 'User deleted successfully',
                });
            })
            .catch((error:any) => {
                return res.status(500).json({
                    message: 'Failed to delete user',
                    error,
                });
            });
        
    })
    .catch((error:any) => {
        return res.status(500).json({
            message: 'Failed to find user',
            error,
        });
    });

    };
export default { validatetoken,register,login,getAllusers,deleteUser};