export default function Tabs ({ categories, setCurrentTab, currentTab }) {
  return (
    <section className='h-[50px] mb-[.5rem] md:mb-[1.5rem] text-[#444] relative'>
      <ul className='hidden md:flex h-full overflow-x-hidden scroll-smooth'>
        {categories?.map((tab, index) => (
          <li key={tab.id} className='w-[calc(100%/6)]'>
            <button 
              onClick={() => setCurrentTab(index)}
              className={ currentTab === index ? 'uppercase bg-gray-300 text-sm w-full h-full flex justify-center items-center' : 'uppercase bg-gray-100 text-sm w-full h-full flex justify-center items-center hover:bg-gray-200'}>
                { tab.title }
              </button>
          </li>
        ))}
      </ul>
      {/* <select name="tabs" className='md:hidden bg-gray-100 uppercase w-full h-[40px] px-[1rem]'>
        {categories?.map((tab, index) => (
          <option 
            key={tab.id} 
            value={index} 
            onClick={() => setCurrentTab(index)}
            className='uppercase'>
              { tab.title }
          </option>
        ))}
      </select> */}
    </section>
  )
}