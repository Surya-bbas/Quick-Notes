import connectMongoDB from "@/lib/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function PUT(req,{params}){
    const {id} = params
    const {topic_title,topic_description} = await req.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id,{topic_title,topic_description})
    return NextResponse.json({message:'update sucess'},{status:202})
}

export async function GET(req,{params}) { 
    const {id} = params
    await connectMongoDB()
    const data = await Topic.findById(id)
    return NextResponse.json(data)
 }