import React from 'react'
import Image from 'next/image'
import html from '../../public/html.png'
import css from '../../public/css.png'
import react from '../../public/react.png'
import next from '../../public/nextjs.png'
import rails from '../../public/rails.png'
import postgresql from '../../public/postgresql.png'
import javascript from '../../public/javascript.png'
import bootstrap from '../../public/bootstrap.png'
import tailwind from '../../public/tailwind.png'

const skills = () => {
  const logos = [
    {
      name: 'CSS',
      image: css,
    },
    {
      name: 'HTML',
      image: html,
    },
    {
      name: 'React',
      image: react,
    },
    {
      name: 'Next.js',
      image: next,
    },
    {
      name: 'Ruby on Rails',
      image: rails,
    },
    {
      name: 'PostgreSQL',
      image: postgresql,
    },
    {
      name: 'JavaScript',
      image: javascript,
    },
    {
      name: 'Tailwind',
      image: tailwind,
    },
    {
      name: 'Bootstrap',
      image: bootstrap,
    },
  ]

  return (
    <section className='h-screen flex flex-col justify-center items-center pt-[80px] md:pt-[100px]'>
      <div className='text-gray-700 text-4xl md:text-5xl font-medium md:self-start md:ml-12 align'>
        What I can do
      </div>
      <div className='w-full p-12 grid md:grid-cols-3 lg:grid-cols-3 md:gap-8 adjust'>
        {logos.map((logo, index) => {
          return (
            <div
              className='w-full flex justify-evenly gap-4 py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
              key={index}
            >
              <Image src={logo.image} alt='html' width={50} height={50} />
              <div className='flex items-center justify-center hide'>
                {logo.name}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default skills
