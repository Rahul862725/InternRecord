
// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { AccessoriesService } from  './accessories.service'
// import { content } from './contents.module';


// @Controller()
// export class AccessoriesController
// {
//     constructor(private readonly accessoriesService:AccessoriesService){}
//    @Post('/photo')
//    async addPhoto(@Body() contnet:content)
//    {
    
//     const res=await this.accessoriesService.insertContent(contnet);
//     if(res) return 1
//     else return 0
//    }
//    async deletePhoto(@Body() contnet:content)
//    {
//     const res=await this.accessoriesService.deleteContent(contnet)
//     if(res)return 1;
//     else return 0;
//    }
//    async getContent()
//    {
//     return await this.accessoriesService.getAll();
//    }
// }