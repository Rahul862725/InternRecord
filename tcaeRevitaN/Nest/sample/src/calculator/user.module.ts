import mongoose from 'mongoose'
 
export const userSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true}
},{collection:'user'})

 
export interface user{
    Name:String,
    Email:String,
    Password:String
 
}
