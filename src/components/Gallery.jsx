import { Suspense } from 'react'
import { useGallery } from '../hooks/useGallery'
import categories from '../mocks/categories'
import GalleryItem from './GalleryItem'
import Modal from './Modal'
import Tabs from './Tabs'

export default function Gallery () {
  const { setCurrentTab, currentTab, handleModal, filteredImages, currentIndex } = useGallery()
  const { openModal, handleOpenModal, handleCloseModal, prevItem, nextItem } = handleModal

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