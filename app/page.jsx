import TopicList from '@/components/TopicList'
import Head from 'next/head'


async function fetchNotes(){
  const notes =  await fetch('http://localhost:3000/api/topics',{cache:'no-store'})
  return notes.json()
}

export default async function  Home() {
  const {data} = await fetchNotes()
  
  console.log(data);
  return (
    <>

     {data.map((note)=>(

       <TopicList  topic_title={note.topic_title} topic_description={note.topic_description}  id={note._id} />
      
     ))}
     
      


    </>
  )
}
