 
// import { Injectable } from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
// import { Model } from "mongoose";
// import { content } from "./contents.module";


// @Injectable()
// export class AccessoriesService{
//     constructor(@InjectModel('Content') private readonly contentModel:Model<content>){}

//     async insertContent(content:content){
//         const newContent=new this.contentModel(content)
//         const result=await newContent.save();
//         return result;
//     }
//     async deleteContent(content:content)
//     {
//         const res=this.contentModel.find(content).exec()
//         const id=res;
//         const result=this.contentModel.deleteOne({_id:id})
//         return result;
//     }
//     async getAll()
//     {
//         return await this.contentModel.find().exec()
//     }
  
// }