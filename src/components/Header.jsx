import { Link } from "react-router-dom"

export default function Header () {
  return (
    <header className='h-fit py-[1.75rem] md:py-[2.25rem] flex flex-col justify-center items-center gap-[2rem]'> {/* h-[230px] */}
      <div className='flex justify-center w-full items-start gap-[3rem] text-[#444]'>
        {/* <Link to='mailto:lucapandolfelliphotography' target={'_blank'}>
          <div className='w-[30px] h-[30px] bg-[#0c0c0b] rounded-full'></div>
        </Link> */}
        <div className='w-fit flex flex-col gap-[1.5rem] justify-center items-center'>
          <Link to='/'>
            <img src="/logos/lucapandolfelli_logo.png" alt="Luca Pandolfelli Photography Logo" className='w-[70px] md:w-[90px]' />
          </Link>
          <h1 className='md:text-lg uppercase'>Luca Pandolfelli Photography</h1>
        </div>
        {/* <Link to='' target={'_blank'}>
          <div className='w-[30px] h-[30px] bg-[#0c0c0b] rounded-full'></div>
        </Link> */}
      </div>
    </header>
  )
}