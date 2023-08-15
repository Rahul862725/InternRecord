import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import userSchema from "./user.schema";

const model=[{
    name:'user', schema:userSchema,
    // discriminators:[{
    //     // name:'employ' schema:employeSchema
    // }]
}]
@Module({
    imports:[MongooseModule.forFeature(model)]
    // imports:[MongooseModule.forFeature(model,"name of connections")]
})

export class mongooseModel{}