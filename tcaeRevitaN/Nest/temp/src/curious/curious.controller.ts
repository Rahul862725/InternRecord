import { Body, Controller, Get, HttpException, Param, ParseEnumPipe, ParseIntPipe, Post, Query, UseFilters } from "@nestjs/common";
// import { ParseIntPipe } from "@nestjs/common/pipes/parse-int.pipe";
import { title } from "src/app.enum.title";
import { addSuffix } from "src/parse-date.pipe";
import { idException } from "./cruious-exceoption";

@Controller('/a')
export class CuriousController{
    @Get('/')
    getAll()
    {
        console.log(title+" curious objects")
    }
    @Post('/add/:id')
    @UseFilters(idException)
    addUser( @Param('id',ParseIntPipe) id:number ,@Body('des',new ParseEnumPipe(title)) des:string,@Query('name',addSuffix) name:string)
    {
        // if(id<0) throw new Error();
        if(id<0) throw new  Error("nh");
        console.log(id+" "+des+" Designation! "+name)
        return { data:1};
       
    } 
}


// we have several function also in lifecyle f nestjs
// 1. onModuleInit, 2.onApplciationBooststrap, 3.onModuleDestroy, 4. beforeApllciationDestroy, 5. onApplicationDestroy