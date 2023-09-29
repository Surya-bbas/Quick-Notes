"use client"
import Link from 'next/link'
import { AiOutlineEdit } from 'react-icons/ai'
import {BiTrash} from 'react-icons/bi'
import { useRouter } from 'next/navigation'


const TopicList = ({topic_title,topic_description,id}) => {
  const router = useRouter()
  async function deleteNote(){
    const confirmed = confirm("Are you sure?")
    if (confirmed){
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method:"DELETE",            
      })
      router.refresh()      
    }

  }
  return (
    <>
        <div className='flex justify-between p-6 mt-6 bg-secondary drop-shadow-md gap-3 rounded-sm border-slate-300 border-2 border-t-4'>
            <div>
                <p className='font-bold text-4xl text-accent'>{topic_title}</p>
                <p>{topic_description}</p>
            </div>
            <div className='flex gap-4 h-[30px]'>
                
                <BiTrash size={28} className='text-red-600 hover:cursor-pointer'   />
                <Link href={`/editTopic/${id}`} className=''> <AiOutlineEdit size={28}/> </Link>
            </div>
        </div>
    </>
  )
}

export default TopicList