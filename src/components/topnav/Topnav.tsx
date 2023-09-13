import { BsBell } from 'react-icons/bs'
import { BsChatDots } from 'react-icons/bs'

const Topnav = () => {
  return (
  <section className="container__app flex flex-row justify-between items-center pt-2 pb-4 px-4">
    <div className="py-2">
      <button 
        type='button'
        className='border bg-gray-200 rounded-lg px-4 py-2 m-2 transition duration-500 select-none hover:bg-gray-300 focus:aoutline-none focus:shadow-outline'>
        <div className='flex items-center justify-center w-full gap-2'>
          <BsBell className="bs_bell" />
          <div className='text-sm text-gray-600 font-bold'>Subscribe</div>
        </div>
      </button>
    </div>
    <div>
      <button type='button'>
        <BsChatDots className='text-2xl' />
      </button>
    </div>
  </section>    
  )
}

export default Topnav