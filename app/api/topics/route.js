import connectMongoDB from "@/lib/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(req){
    const {topic_title,topic_description} = await req.json()
    await connectMongoDB()
    console.log(topic_description,topic_title);
    const data = await Topic.create({topic_title,topic_description})
    console.log(data);
    return NextResponse.json({message:'Topic Created'},{status:201})
}