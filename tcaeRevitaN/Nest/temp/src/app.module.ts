import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuriousModule } from './curious/curious.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';
import { Appconfig } from './config/app.config';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';


// @Global()// use to use anywhere wihotut import  
@Module({
  imports: [CuriousModule,ConfigModule.forRoot({
    envFilePath:[".env"],
    cache:true,
    load:[Appconfig],
    expandVariables:true,
    isGlobal:true
  }),
//  MongooseModule.forRoot("abc",{
//   connectionName:'App' // give name in @InjectModel(name of schema, name of connection) we have also @InjectConnection() type script
//  })

//connection using configuration

//  MongooseModule.forRootAsync({
//   useFactory(config:ConfigService){
//    return {
//        uri:"url"
//    }
//   },
//   connectionName:"App",
//   inject:[ConfigService]
//  })
],
  controllers: [AppController],
  // providers: [AppService,{provide:AppService,useClass:AppService},{
  //   provide:'abc',
  //   useFactory: ()=>{
  //     return "hello";
  //   },
  //   inject:[]
  // }],
  providers:[AppService,{
    provide:'TEST',
    useValue:'testing providers'
  }]
})
export class AppModule {}
