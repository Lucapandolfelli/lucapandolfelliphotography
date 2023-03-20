export default function Tabs ({ categories, setCurrentTab, currentTab }) {
  return (
    <section className='h-[40px] md:h-[50px] mb-[1rem] md:mb-[1.5rem] text-[#444] dark:text-[#f4f4f4]'>
      <ul className='tabs-wrapper overflow-x-auto flex h-full scroll-smooth'>
        {categories?.map((tab, index) => (
          <li key={tab.id} className='min-w-[150px] md:w-[calc(100%/6)]'>
            <button 
              onClick={() => setCurrentTab(index)}
              className={ currentTab === index ? 'uppercase bg-gray-300 dark:bg-[#252525] text-sm font-medium dark:text-[#fff] w-full h-full flex justify-center items-center' : 'uppercase bg-gray-100 dark:bg-[#333] text-sm w-full h-full flex justify-center items-center hover:bg-gray-200 dark:hover:bg-[#616161]'}>
                { navigator.language || navigator.userLanguage ? tab.title_en : tab.title }
              </button>
          </li>
        ))}
      </ul>
    </section>
  )
}