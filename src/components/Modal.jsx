import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'

export default function Modal({ handle, images, index }) {
  const { handleCloseModal, prevItem, nextItem } = handle
  const image = images[index]

  const img = new Image();
  img.src = `/images/${ image.src }`

  return (
    <Backdrop>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .125 }}
        className={ img.width > img.height ? "px-[1rem] max-w-[400px] md:px-0 md:max-w-[1000px] h-auto relative shadow-xl z-50" : "px-[1rem] md:px-0 max-w-[350px] md:max-w-[500px] h-auto relative shadow-xl z-50"}>
        <button className="text-white text-3xl md:text-4xl absolute top-0 left-[calc(50%_-_15px)] right-[calc(50%_-_15px)] bottom-[-120%] sm:block sm:bottom-[unset] sm:m-0 sm:left-[unset] sm:top-[-2.25rem] sm:right-[-2.25rem] hover:scale-[1.05]" onClick={handleCloseModal}><IoMdClose /></button>
        { index > 0 && <button className='text-white text-3xl absolute left-[-2.5rem] top-[calc(50%_-_30px)] hover:scale-[1.05]' onClick={prevItem}><BiLeftArrow /></button> }
        { index + 1 < images.length && <button className='text-white text-3xl absolute right-[-2.5rem] top-[calc(50%_-_30px)] hover:scale-[1.05]' onClick={nextItem}><BiRightArrow /></button> }
        <picture className="w-full" onContextMenu={(e) => e.preventDefault()}>
          <img src={`/images/${ image.src }`} alt={ image.alt } className='object-cover' onDragStart={(e) => e.preventDefault()} />
        </picture>
        <span className='mt-[.5rem] block font-lighter text-white text-[.75rem]'>{ image.event }</span>
      </motion.div>
    </Backdrop>
  )
}