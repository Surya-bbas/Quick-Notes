
import Link from 'next/link'
import { AiOutlineEdit } from 'react-icons/ai'
import {BiTrash} from 'react-icons/bi'


const TopicList = () => {
  return (
    <>
        <div className='flex justify-between p-6 mt-6 bg-secondary drop-shadow-md gap-3 rounded-sm border-slate-300 border-2 border-t-4'>
            <div>
                <p className='font-bold text-4xl'>Topic Heading </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non voluptatibus minus veritatis facere saepe quaerat. Officia animi sapiente cum, maiores adipisci reiciendis ipsa, corporis quia similique, quos dignissimos ut. </p>
            </div>
            <div className='flex gap-4 h-[30px]'>
                <BiTrash size={28} className='text-red-600' />
                <Link href='/editTopic/123' className=''> <AiOutlineEdit size={28}/> </Link>
            </div>
        </div>
    </>
  )
}

export default TopicList