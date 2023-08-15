import { registerAs } from "@nestjs/config"

export const Appconfig=()=>{
     return {
        AB:"ab"
     }
}

const database_config=registerAs('databse',()=>{
    return {
        url(){

        }
    }
})