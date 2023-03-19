import { useEffect, useState } from "react"
import { messArray } from "../utils/messArray"
import { useScrollLock } from "./useScrollLock"
import images from "../mocks/images"

export function useGallery () {
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

  return { 
    handleModal: { openModal, handleOpenModal, handleCloseModal, prevItem, nextItem }, 
    currentTab, 
    setCurrentTab, 
    filteredImages, 
    currentIndex 
  }
}