import {NextResponse} from "next/server"
import connectDB from "../../lib/connectDB"
import PostModel from "@/models/Post"

export async function GET(req){

    try{
        await connectDB()
        const result = await PostModel.find()

        return NextResponse.json(
            {"result":result},
            {status:200}
        )
    }
    catch (error){
        return NextResponse.json(
            {"msg":"something went wrong"},
            {status:400}
        )
    }
    
}

export async function POST(req){
    const body = await req.json()
    try{

        await connectDB()
        const result = await PostModel.create(body)
        console.log(result)
        return NextResponse.json(
            {"result":result},
            {status:200}
        )
    }
    catch (error){
        return NextResponse.json(
            {"msg":"something went wrong"},
            {status:400}
        )
    }
    
}