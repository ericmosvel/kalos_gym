import data from '../../services/data.json'
import { BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { IconContext } from "react-icons"

const Profile = () => {
  return (
    <section className="container__app flex justify-center items-center flex-col mb-4 px-4">
      <span className='shrink-0 relative'>
        <img
          className='rounded-full border-2 border-solid border-teal-500'
          alt={data.name}
          src={data.avatar}
          width={110}
          height={110} />
      </span>
      <div className='text-xl font-semibold mt-4' >@laurenfit</div>
      <IconContext.Provider value={{size:'25px'}}>
        <div className='mt-4 flex flex-row gap-2.5'>
          <a href="#"><FaTiktok /></a>
          <a href="#"><BsInstagram /></a>
        </div>
      </IconContext.Provider>
      <div className='my-8 text-center'>
        <p className='text-lg'>Try my Training & Nutrition Plans for Free</p>
      </div>        
    </section>       
  )
}

export default Profile