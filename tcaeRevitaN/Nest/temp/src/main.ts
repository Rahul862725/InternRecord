import { NestFactory } from '@nestjs/core';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    // httpsOptions:{
    //   key:readFileSync(resolve(__dirname,"../cert/CA.key")),
    //   cert:readFileSync(resolve(__dirname,"../cert/CA.pem"))
    // }
  });
  await app.listen(437)

  // app.use(middleware)  --> middleware is only function
  // app.useGlobalInterceptor(interceptor)

  // we can use ConfiguService here also 
  // 
   
}
bootstrap();


// for validation of schema 'joi' validation use  
