export default function Backdrop({ children }) {
  return (
    <div className="bg-black/90 fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center">
      { children }
    </div>
  )
}