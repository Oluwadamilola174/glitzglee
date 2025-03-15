import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Hero.css'
import thin from '../../assets/thin.png'
const Hero = () => {
     // Get the scroll progress
    const { scrollYProgress } = useScroll();
     // Transform scale based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]); // Zooms in as you scroll down
  return (
    <motion.div className='hero container'
    style={{ scale }}>

        <motion.div className="hero-text" initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}>

           <motion.h1   initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
            Bringing Glitz to Life, Adding Glee to Moments
            </motion.h1>
           <motion.p initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}>
            Make every occasion extraordinary with our exclusive touch of glitz and boundless glee. Celebrate in style, the way you deserve.
           </motion.p>
           <motion.button className='btn'
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          transition={{ duration: 0.2 }}>
            Explore more <img src={thin} alt=""/>
            </motion.button>
        </motion.div>
    </motion.div>
  )
}

export default Hero