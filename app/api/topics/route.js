import connectMongoDB from "@/lib/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(req){
    const {topic_title,topic_description} = await req.json()
    await connectMongoDB()    
    const data = await Topic.create({topic_title,topic_description})    
    return NextResponse.json({message:'Topic Created'},{status:201})
} 

export async function GET(req){
    await connectMongoDB()
    const data = await Topic.find({})
    return NextResponse.json({data})
}

export async function DELETE(request,) {  
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Topic.deleteOne({_id:id})
    return NextResponse.json({message:"item deleted"}, {status:201})
}