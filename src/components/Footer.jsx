import { Link } from "react-router-dom"

export default function Footer () {
  return (
    <footer className='py-[2rem] flex flex-col justify-center items-center gap-[1.5rem] text-[#444] dark:text-[#f4f4f4]'>
      <div className='footer-logo'>
        <img src={`/logos/horseshoe_${ window.matchMedia('(prefers-color-scheme: dark)').matches ? 'white' : 'black' }.png`} alt="Horseshoe Icon" />
      </div>
      <div className='text-center'>
        <p className='uppercase text-sm md:text-base mb-[.25rem]'>Copyright &copy; {new Date().getFullYear()} - Luca Pandolfelli Photography</p>
        <small className='text-[#707070] dark:text-[#999999]'>{ navigator.language || navigator.userLanguage === 'en-US' ? 'Designed and Developer by' : 'Diseñada y Desarrollada por' } <Link to='https://lucapandolfelli.com' target='_blank' className='text-amber-300 font-medium'>Luca Pandolfelli</Link></small>
      </div>
    </footer>
  )
}