import { motion } from 'framer-motion';
import './slider.css'
import { useRef, useEffect, useState} from 'react';

interface SliderProps {
  slides: string[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [width, setWidth] = useState(0);

  const sliders = useRef<HTMLDivElement | null>(null);
  //console.log(sliders);

  /* restamos el espacio del inner - offset para establecer limites del slider */
  useEffect(() => {    
    let a: number = (sliders.current?.scrollWidth || 0)
    let b: number = (sliders.current?.offsetWidth || 0)
    setWidth(a-b);
    console.log(a, b);    
  }, []);

  return (
    <section className='py-4'>
      <motion.div ref={sliders} className='slider' whileTap={{cursor: "grabbing"}}>
          <motion.div 
            drag="x"
            dragConstraints={{ right:0, left: -width }}
            className='inner_slider'>
            {slides.map((slide, index) => {
              return (
                <motion.div className='item pr-2' key={index}>
                  <img src={slide} alt="products" />
                </motion.div>
              );
            })}
          </motion.div>
      </motion.div>
    </section>
  )
}

export default Slider