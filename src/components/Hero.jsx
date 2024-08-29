/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { textVariant } from '../utils/motion'


const Hero = () => {
  return (
    <>
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-60 h-40 violet-gradient' />
        </div>
        
        <div>
        <motion.div variants={textVariant()}>
          <h1 className={`${styles.heroHeadText} text-white  mt-2`}>
            Hi, I'm <span className='glow text-[#915eff]'>  Vibhor </span>
          </h1>
          <p className={`${styles.heroSubText} shadow-sm text-white mt-2`}> An Information Technology graduate  
          <br className='sm:block hidden' />
            {""} with a passion for full-stack development.
          </p>
          </motion.div>
        </div>
      </div>


      <br />

      <ComputersCanvas />

      <div className={`absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center`}>

        <a href='#about'>
          <div className='w-[30px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
      <br />
    </section>
    </>
  )
}

export default Hero;