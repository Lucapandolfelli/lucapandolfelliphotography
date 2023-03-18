import { Link } from "react-router-dom"

export default function Footer () {
  return (
    <footer className='py-[2rem] flex flex-col justify-center items-center gap-[1.5rem] text-[#444]'>
      <div className='footer-logo'>
        <img src="/logos/horseshoe.png" alt="Horseshoe Icon" />
      </div>
      <div className='text-center'>
        <p className='uppercase text-sm md:text-base mb-[.25rem]'>Copyright &copy; {new Date().getFullYear()} - Luca Pandolfelli Photography</p>
        <small className='text-[#707070]'>Designed and Developer by <Link to='https://lucapandolfelli.com' target='_blank' className='text-black font-medium'>Luca Pandolfelli</Link></small>
      </div>
    </footer>
  )
}