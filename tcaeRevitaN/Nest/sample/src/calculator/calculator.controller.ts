import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FormDataRequest } from "nestjs-form-data";
import { CalculatorServicce } from "./calculator.service";
import { user } from "./user.module";


@Controller()
export class CalculatorController {
    constructor(private readonly calculatorService:CalculatorServicce){}
    @Get('/')
    welcome():string{
        return "Welcome in Calcualtor backend!"
    }
    @Post('/signup')
    @FormDataRequest()
    async signupInCalcualtor(@Body() user:user){
        // console.log(Name,Email," sfd")
       const res=await this.calculatorService.getSingleUsers({Email:user.Email})
    //    console.log(res+"hello")
       if(res.length!=0) return {data:2}
       const res1= await this.calculatorService.insertUser(user)
       if(res1)return {data:1}
       return {data:0}
    }
    @Post('/login')
    @FormDataRequest()
    async loginInCalcualtor(@Body() user:user)
    {
        // console.log("data" ,user.Name)
        const obj={
            Password:user.Password,
            Email:user.Email
        }
        const res= await this.calculatorService.getSingleUsers(obj);
        // console.log(res+"hello")
        if(res.length!=0) return {data:1}
        else return {data:0}
    }

}