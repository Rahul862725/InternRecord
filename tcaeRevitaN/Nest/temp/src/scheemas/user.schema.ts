import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { title } from "src/app.enum.title";

@Schema({
    discriminatorKey:"userKind"
})
export class user{
    @Prop({required:true})
    name:String
    @Prop({required:true})
    pass:String
    // @Prop()
    // name:String
    // @Prop({required:true})
    // email:String
    // @Prop({
    //     enum:["student","parent","course"],
    //     immutable:true,
    //     required:true,
    //     default:"student"
    // })
    // des:String
    // @Prop() 
    // status?:String // ? means optional 
    // @Prop({
    //     type:String,
    //     required:true,
    //     enum:Object.keys(title)
    // })
    // title:title

}

export default SchemaFactory.createForClass
(user);

// in user schema we can declare pre and post hook with instqance method that help in polutate the other schema in find queries and password cases 
// static use for module 

