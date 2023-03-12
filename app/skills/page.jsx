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
    <div className='carousel-container'>
      <div className='carousel '>
        <div className='carousel__face '>
          <Image
            src={html}
            alt='html'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className='carousel__face'>
          <Image src={css} alt='css' width={50} height={50} className='logo' />
        </div>
        <div className='carousel__face'>
          <Image
            src={react}
            alt='react'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className='carousel__face'>
          <Image
            src={next}
            alt='next'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className='carousel__face'>
          <Image
            src={javascript}
            alt='javascript'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className='carousel__face'>
          <Image
            src={rails}
            alt='rails'
            width={50}
            height={50}
            className='logo'
          />
        </div>
        <div className='carousel__face'>
          <Image
            src={postgresql}
            alt='postgresql'
            width={50}
            height={50}
            className='logo'
          />
        </div>
      </div>
    </div>
  )
}

export default skills
