import Gallery from "../components/Gallery";
import MainLayout from '../layouts/MainLayout'

export default function HomePage () {
  return (
    <MainLayout>
      <section className='pb-[1rem] md:pb-[2rem]'>
        <Gallery />
      </section>
    </MainLayout>
  )
}