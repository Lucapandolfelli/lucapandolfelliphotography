import { NavLink } from "react-router-dom"

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
    label: 'Contact',
    url: '/contact'
  },
]

export default function Navbar () {
  return (
    <nav className='hidden lg:flex justify-center py-[.75rem] gap-[1rem] text-[#444] uppercase border-t-[1px] border-b-[1px] w-full'>
      {links?.map((link) => (
        <NavLink key={link.id} className={({ isActive }) => isActive ? 'text-black font-medium' : 'hover:text-[#1b1b1b]'} to={link.url}>{link.label}</NavLink>
      ))}
    </nav>
  )
}