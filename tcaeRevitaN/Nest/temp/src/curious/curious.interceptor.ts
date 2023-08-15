import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { table } from "console";
import { Observable } from "rxjs";
import {tap} from "rxjs/operators"

@Injectable()
export class useIn implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>){
        return next.handle().pipe(tap((re)=>{
            console.log(re)
            // UseInterceptor(name)  --> to use interceptor
        }))
    }
}

 
