import Link from "next/link"
import {FcViewDetails} from 'react-icons/fc'

const Navbar = () => {
  return (
    <nav className="flex p-4 justify-between bg-background text-text">
        <Link href='/' className="bg-background flex items-center "><FcViewDetails size={20} color="#ebf1ff" /> <span className="pl-2 text-xl font-bold">Quick Notes</span></Link>
        <Link href='/addTopic' className="bg-secondary text-background p-2 rounded-sm">Add Topics</Link>
    </nav>
  )
}

export default Navbar