import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { GiTransportationRings } from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className=''>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="" onClick={() => setActiveNav('')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="" onClick={() => setActiveNav('')} className={activeNav === '#experience' ? 'active' : ''}><GiTransportationRings /></a>       
    </nav>
)
}

export default Nav