export default function GalleryItem ({ image, onClick }) {
  return (
    <picture 
      key={image.id}
      onClick={onClick}
      className='w-[calc(50%_-_.25rem)] aspect-square h-full max-w-[250px] md:w-[250px] md:h-[250px] hover:cursor-pointer'>
      <img src={`/images/${ image.src }`} alt={image.event} className='w-full h-full object-cover' />
    </picture>
  )
}