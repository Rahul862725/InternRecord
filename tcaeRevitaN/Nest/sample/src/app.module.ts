import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule} from '@nestjs/mongoose'
import { AppService } from './app.service';
import { CalaculatorModule } from './calculator/calculator.module';
// import { AccessoriesModule } from './accessories/accessories.module';

@Module({
  imports: [
    CalaculatorModule,
    // AccessoriesModule,
     MongooseModule.forRoot("mongodb://localhost:27017/clc")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
