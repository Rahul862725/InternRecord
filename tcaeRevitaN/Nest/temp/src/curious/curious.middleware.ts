import { NestMiddleware, Next } from "@nestjs/common"
import { NextFunction } from "express";

 
 export function userAgent(req:Request,res:Response,next:NextFunction)
 {
       const type=req.headers["user-agent"]
 }

 export class userAgentMiddle implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        
    }
  
 }