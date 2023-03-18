export default function Container ({ children }) {
  return (
    <main>
      <div className='main-container'>
        { children }
      </div>
    </main>
  )
}