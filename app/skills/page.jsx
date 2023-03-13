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
    <section className='h-screen flex justify-center items-center'>
      <div className='w-full px-12 justify-center grid md:grid-cols-3 lg:grid-cols-3 gap-8 items-center row-start-1 row-span-1 col-start-1 '>
        {logos.map((logo, index) => {
          return (
            <div
              className='flex justify-evenly gap-4 py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
              key={index}
            >
              <Image src={logo.image} alt='html' width={50} height={50} />
              <div className='flex items-center justify-center'>
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
