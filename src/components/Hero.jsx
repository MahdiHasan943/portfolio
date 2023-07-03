import React, { useEffect, useState } from 'react'
import { styles } from '../styles';
import { motion } from 'framer-motion'
import { ComputersCanvas} from './canvas'
const Hero = () => {
  return (

    <section className='w-full h-screen mx-auto relative'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5`}>

        <div className="flex flex-col items-center mt-5 justify-center">
          <div className="rounded-full h-5 w-5 bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Mahdi </span></h1>
         <p className={`${styles.heroSubText} text-white-100`}>I craft full-stack applications with sleek modern <br className='sm:block hidden'/> UX/UI designs, utilizing React and Next.js.</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32  w-full flex justify-center items-ceter'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

     </section>
    )
}

export default Hero