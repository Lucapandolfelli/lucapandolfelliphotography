export default function ContactPage () {
  return (
    <section className='pb-[1rem] md:pb-[2rem]'>
      <h1 className='text-2xl uppercase mb-[1.5rem]'>Contact</h1>
      <div className='flex gap-[1rem]'>
        <picture className='w-[50%] bg-gray-400 h-fit'>
          <img src="/images/IMG_2272.jpg" alt="Contact Page" className='w-full object-cover'/>
        </picture>
        <div className='w-[50%] bg-gray-400 h-[500px]'></div>
      </div>
    </section>
  )
}