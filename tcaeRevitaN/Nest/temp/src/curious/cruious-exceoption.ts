import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { json } from "express";
import { CuriousController } from "./curious.controller";

@Catch(Error)  // if catch is emepty then it handle all types of exception 
export class idException implements ExceptionFilter{
   catch(exception: any, host: ArgumentsHost) {
       const body={
        message:exception.message,
        error:"id error"
       }

       const ctx=host.switchToHttp();
       const res=ctx.getResponse()
       res.status(400).json(body)
   }
}