export default function Tabs ({ categories, setCurrentTab, currentTab }) {
  return (
    <section className='h-[40px] md:h-[50px] mb-[1rem] md:mb-[1.5rem] text-[#444]'>
      <ul className='overflow-x-auto flex h-full scroll-smooth'>
        {categories?.map((tab, index) => (
          <li key={tab.id} className='min-w-[150px] md:w-[calc(100%/6)]'>
            <button 
              onClick={() => setCurrentTab(index)}
              className={ currentTab === index ? 'uppercase bg-gray-300 text-sm w-full h-full flex justify-center items-center' : 'uppercase bg-gray-100 text-sm w-full h-full flex justify-center items-center hover:bg-gray-200'}>
                { navigator.language || navigator.userLanguage ? tab.title_en : tab.title }
              </button>
          </li>
        ))}
      </ul>
    </section>
  )
}