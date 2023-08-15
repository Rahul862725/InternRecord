import { Module } from "@nestjs/common";
import {MongooseModule} from '@nestjs/mongoose'
import { NestjsFormDataModule } from "nestjs-form-data";
import { CalculatorController } from "./calculator.controller";
import { CalculatorServicce } from "./calculator.service";
import { userSchema } from "./user.module";


@Module({
    imports:[
        NestjsFormDataModule,
        MongooseModule.forFeature([{name:'User',schema:userSchema}])],

    controllers:[CalculatorController],
    providers:[CalculatorServicce]
})
export class CalaculatorModule {}