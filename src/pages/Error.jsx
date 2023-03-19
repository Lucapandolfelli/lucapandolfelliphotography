import { Link } from "react-router-dom"
import Container from "../components/Container"

export default function ErrorPage () {
  return (
    <section className='h-screen'>
      <Container>
        <div className='w-full h-full flex flex-col gap-[1.5rem] md:gap-[3rem] justify-center items-center'>
          <div className='w-full flex flex-col items-center md:items-end'>
            <h1 className='text-[3rem] md:text-[5rem] font-bold tracking-wide md:leading-[1]'>Oops!</h1>
            <h2 className='text-[1.5rem] md:text-[3rem] text-[#d1d1d1] mb-[1rem]'>We couldn't find that page.</h2>
            <span className='font-thin uppercase text-sm'>Error 404 - Page Not Found</span>
          </div>
          <Link to='/' className='text-center md:text-left w-full hover:text-amber-300'>Go back to the website</Link>
        </div>
      </Container>
    </section>
  )
}