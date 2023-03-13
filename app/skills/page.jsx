import React from 'react'
import Image from 'next/image'
import html from '../../public/html.png'
import css from '../../public/css.png'
import react from '../../public/react.png'
import next from '../../public/nextjs.png'
import rails from '../../public/rails.png'
import postgresql from '../../public/postgresql.png'
import javascript from '../../public/javascript.png'

const skills = () => {
  return (
    <section className="mt-[100px]">
      <div className=' justify-center grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"'>
          <Image
            src={html}
            alt='html'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className=''>
          <Image src={css} alt='css' width={50} height={50} className='logo' />
        </div>
        <div className=''>
          <Image
            src={react}
            alt='react'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className=''>
          <Image
            src={next}
            alt='next'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className=''>
          <Image
            src={javascript}
            alt='javascript'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className=''>
          <Image
            src={rails}
            alt='rails'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className=''>
          <Image
            src={postgresql}
            alt='postgresql'
            width={50}
            height={50}
            className='logo'
          />
        </div>
      </div>
    </section>
  )
}

export default skills
