import { useState, useEffect, Suspense } from 'react'
import { useScrollLock } from '../hooks/useScrollLock'
import images from '../mocks/images'
import categories from '../mocks/categories'
import Modal from './Modal'
import Tabs from './Tabs'
import { messArray } from '../utils/messArray'
import GalleryItem from './GalleryItem'

export default function Gallery () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filteredImages, setFilteredImages] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    setFilteredImages(messArray(images?.filter((image) => currentTab === 0 ? image : image.categoryId === currentTab && image)))
  }, [currentTab])

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
          <Suspense fallback={'loading'} key={image.id}>
            <GalleryItem image={image} onClick={() => handleOpenModal(index)} />
          </Suspense>
        ))}
      </div>
      { openModal && <Modal handle={{ handleCloseModal, prevItem, nextItem }} images={filteredImages} index={currentIndex} />}
    </>
  )
}