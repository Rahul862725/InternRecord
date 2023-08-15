import { Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
// @Injectable({scope:Scope.TRANSIENT})
export class AppService {
  constructor(private config:ConfigService){

  const obj=this.config.get('ab','default value of ab');
  console.log(obj)
  }
  getHello(): string {
    return 'Hello World!';
  }
  // getAll(id){
  //   return "all users with "+id;
  // }
}
