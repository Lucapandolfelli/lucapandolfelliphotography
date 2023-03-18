import { NavLink } from "react-router-dom"
import { CgMenuRight } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'
import { useState } from "react"
import { motion } from "framer-motion"

const links = [
  {
    id: 1,
    label: 'Home',
    url: '/'
  },
  {
    id: 2,
    label: 'About',
    url: '/about'
  },
  {
    id: 3,
    label: 'Details',
    url: '/details'
  },
  {
    id: 4,
    label: 'Barrel Racing',
    url: '/barrel-racing'
  },
  {
    id: 5,
    label: 'Reining',
    url: '/reining'
  },
  {
    id: 6,
    label: 'Ranch Events',
    url: '/ranch-events'
  },
  {
    id: 7,
    label: 'Stack Race',
    url: '/stack-race'
  },
]

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  }
}

export default function MobileNavbar () {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='lg:hidden'>
      <button onClick={() => setShowMenu(true)} className='text-3xl'>
        <CgMenuRight />
      </button>
      <motion.div 
        variants={menuVariants} 
        initial='hidden' 
        animate={ showMenu ? 'show' : 'hidden' }
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-50'>
        <button onClick={() => setShowMenu(false)} className='text-4xl absolute z-30 left-4 top-14'>
          <IoMdClose />
        </button>
        <ul className='h-full flex flex-col justify-center items-center gap-8 text-3xl'>
          {links?.map((link) => (
            <NavLink onClick={() => setShowMenu(false)} key={link.id} className={({ isActive }) => isActive ? 'text-black font-medium' : 'hover:text-[#1b1b1b]'} to={link.url}>{link.label}</NavLink>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}