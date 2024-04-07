import { mongoose } from "mongoose";

export default async () => {
    try{
        const DB_OPTIONS = {
            dbName : process.env.DB_NAME,
            user : process.env.DB_USER_NAME,
            pass : process.env.DB_PASSWORD,
            authSource : process.env.DB_AUTHSOURCE,

        }
        await mongoose.connect(process.env.DATABASE_CONNECTION_URL,DB_OPTIONS)
        console.log("Connected Successfully")
    }
    catch (error){
        console.log(error)
    }
}