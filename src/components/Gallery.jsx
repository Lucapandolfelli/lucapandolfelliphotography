import { useState } from 'react'
import { useScrollLock } from '../hooks/useScrollLock'
import images from '../mocks/images'
import categories from '../mocks/categories'
import Modal from './Modal'
import Tabs from './Tabs'

export default function Gallery () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const { lockScroll, unlockScroll } = useScrollLock();

  const filteredImages = images?.filter((image) => currentTab === 0 ? image : image.categoryId === currentTab && image)

  const handleOpenModal = (index) => {
    lockScroll()
    setCurrentIndex(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    unlockScroll()
    setOpenModal(false)
  }

  const prevItem = () => {
    currentIndex === 0 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1)
  }

  const nextItem = () => {
    currentIndex + 1 === images.length ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
  }

  return (
    <>
      <Tabs categories={categories} setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <div className='w-full flex flex-wrap justify-center gap-[.5rem] md:gap-[1rem]'>
        {filteredImages.map((image, index) => (
          <picture 
            key={image.id}
            onClick={() => handleOpenModal(index)}
            className='w-[calc(50%_-_.25rem)] aspect-square h-full max-w-[250px] md:w-[250px] md:h-[250px] bg-[#444] hover:cursor-pointer'>
            <img src={`/images/${ image.src }`} alt={image.event} className='w-full h-full object-cover' />
          </picture>
        ))}
      </div>
      { openModal && <Modal handle={{ handleCloseModal, prevItem, nextItem }} images={filteredImages} index={currentIndex} />}
    </>
  )
}