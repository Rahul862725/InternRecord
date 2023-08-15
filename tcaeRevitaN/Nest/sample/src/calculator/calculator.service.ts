import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { user } from "./user.module";


@Injectable()
export class CalculatorServicce {
    constructor(@InjectModel('User') private readonly userModel: Model<user>) { }

    async insertUser( user:user) {
        const newUser = new this.userModel(user)
        const result=await newUser.save();
        // console.log("Result",result)
        return result;
    }
    async getUsers()
    {
        return await this.userModel.find().exec();
    }
    async getSingleUsers(User)
    {
        console.log(User)
       const res=await this.userModel.find(User).exec()
    //    console.log("Response",res)
       return res;
    }

}