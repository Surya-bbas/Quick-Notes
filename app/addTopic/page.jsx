"use client"
import TopicForm from "@/components/TopicForm"
import { Button, TextField } from '@mui/material'
import { useState } from "react"
import { useRouter } from "next/navigation"




const page = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router =  useRouter()

  async function postData(){
    if (title !="" && description !=""){

      await fetch("http://localhost:3000/api/topics",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',             
        },
        body:JSON.stringify({
          topic_title:title,
          topic_description:description
        })
        
      })
      router.push('/')
    }
    else{
      alert("Please provide title and description")
    }
    
  }

  return (
    <div className=" gap-5 flex flex-col">
      <TextField fullWidth label="Topic Title" id="fullWidth" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <TextField fullWidth label="Topic Description" id="fullWidth" value={description} onChange={(e)=>setDescription(e.target.value)}  />
      <Button variant="contained" className="text-text bg-background hover:bg-background w-40 p-2  m-auto" onClick={()=>postData()} >Add Topic</Button>
    </div>
  )
}

export default page