import { Controller, Get, HttpCode, Req, Res,Post, Header, Redirect, Param, Body, Query, HostParam, Optional, Inject, ParseUUIDPipe, ParseEnumPipe, ParseArrayPipe, UsePipes, ParseIntPipe } from "@nestjs/common";
import { of } from "rxjs";
import { title } from "./app.enum.title";
import { AppService } from "./app.service";
import { addSuffix } from "./parse-date.pipe";

@Controller('/')
export class AppController{

    constructor(@Inject('TEST') private obj:String)
    {}

    @Get('/')
    getConsole()
    {
        console.log(this.obj+"hello")
        
    }
    @Post('/add/:id')
    addUser( @Param('id',ParseIntPipe) id:number ,@Body('des',new ParseEnumPipe(title)) des:string,@Query('name',addSuffix) name:string)
    {
        console.log(id+" "+des+" Designation! "+name)
        return { data:1};
       
    }
    //  constructor(private apService:AppService){}
      
    // @Post('/user/:id/:an')
    // @HttpCode(78)
    // @Header('ab','f')
    // @Redirect('/',324)
    // getUser(@Req() req:any,@Res() res)
    // {
    //    return {
    //     url:"asdf",
    //     statusCode:'302'
    //    }
    // }

    // @Get('/')
    // useFactory()
    // {

    // }

    // @Get('/details/:uuid')
    // @UsePipes( )
    // getDetails(@Param('uuid',  ParseUUIDPipe  ) id:String, @Body('type', new ParseEnumPipe(title)) id1:title, @Query('ids', new ParseArrayPipe({items:Number,separator:","}))ids:number[])
    // {
    //     const res=this.apService.getAll(id);
    // }


    // Parse array pipe include within class-validator and class-transformer , install it.

    
}