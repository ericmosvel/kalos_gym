import { motion } from "framer-motion";
import { useState } from "react";
import { images } from '../../assets/pictures';
import { prendas } from '../../assets/prendas';
import Slider from '../slider/Slider'

let tags = [
  {id: 'suplementation', label: 'Suplementation'},
  {id: 'apparels', label: 'Apperels'},
] 

const Tabs = () => {
  const [activeTag, setActiveTag] = useState(tags[0].id);

  return (
    <section className="container__app flex flex-col justify-start px-4">
      <div className="py-4">
        {tags.map((tag) => (
          <button 
            key={tag.id} 
            onClick={() => setActiveTag(tag.id)}
            className={`${ 
              activeTag === tag.id ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          >
            {activeTag === tag.id && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 bg-teal-500"
                style={{ borderRadius:9999 }}              
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                />
            )}
            <span className="relative z-10">{tag.label}</span>
          </button>
        ))}
      </div>
      
      {/* content section */}      
      <div>        
        <div 
          onClick={() => setActiveTag(tags[0].id)}
          className={`${activeTag === 'suplementation' ? "block" : "hidden"}`} >
          <Slider slides={images} /> 
        </div>
        <div 
          onClick={() => setActiveTag(tags[1].id)} 
          className={`${activeTag === 'apparels' ? "block" : "hidden"}`} >
          <Slider slides={prendas} />         
        </div>    
      </div>
      
    </section>
  )
}

export default Tabs