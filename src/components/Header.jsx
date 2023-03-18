import Navbar from "./Navbar"
import MobileNavbar from './MobileNavbar'
import { Link, NavLink } from "react-router-dom"

export default function Header () {
  return (
    <header className='h-fit py-[2.25rem] flex flex-col justify-center items-center gap-[2rem]'> {/* h-[230px] */}
      <div className='flex justify-center items-center gap-[3rem] text-[#444]'>
        {/* <nav className='flex gap-[1rem] uppercase'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav> */}
        <div className='w-fit flex flex-col gap-[1.5rem] justify-center items-center'>
          <Link to='/'>
            <img src="/logos/lucapandolfelli_logo.png" alt="Luca Pandolfelli Photography Logo" className='w-[90px]' />
          </Link>
          <h1 className='md:text-lg uppercase'>Luca Pandolfelli Photography</h1>
        </div>
        {/* <nav className='flex gap-[1rem] uppercase'>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav> */}
      </div>
      {/* <hr className='border-[#444] w-[500px]' /> */}
      {/* <Navbar /> */}
    </header>
  )
}