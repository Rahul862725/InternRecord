import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CuriousController } from "./curious.controller";
import { userAgent } from "./curious.middleware";

@Module({
    controllers: [CuriousController]
})
export class CuriousModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(userAgent).forRoutes('/',"/a")
        // in for routes we can pass class controller and rest handlers also 
        // for multiple middleware add middleware in apply(a,b,c)  run in sequence if next execute inside a or b 
        // for all routes use forRoutes("*")
    }
}