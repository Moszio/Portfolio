import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/profilePic.jpg'

const about = () => {
  return (
    <section className='mt-[120px]'>
      <figure className='md:flex rounded-xl p-10  '>
        <Image
          className='md:w-128 md:h-auto md:rounded mx-auto drop-shadow-xl overflow:none'
          src={profilePic}
          alt='avatar'
          width='384'
          height='512'
        />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <blockquote>
            <p className='text-gray-600'>
              Hello! I'm a full stack developer based in New York City, New
              York, with a passion for creating beautiful and functional
              websites. With a background in design and specialization in
              front-end development, I bring a unique perspective to every
              project I work on. I recently graduated from Flatiron BootCamp as
              a full stack development student, where I honed my skills in
              programming, database management, and more. As you explore my
              portfolio, you'll see examples of my work in front-end
              development, including projects that showcase my expertise in
              HTML, CSS, JavaScript, React, and Ruby on Rails. I'm also
              well-versed in back-end development and have experience with
              database technologies like PostgreSQL.
            </p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark:text-sky-400'>Andor Lato</div>
            <div className='text-slate-700 dark:text-slate-500'>
              Full Stack Software Engineer
            </div>
          </figcaption>
        </div>
      </figure>
    </section>
    /* 

    <section
      id='about'
      classNameName='w-full md:h-screen p-2 flex items-center py-16'
    >
      <div classNameName='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div classNameName='col-span-2'>
          <p classNameName='uppercase text-xl tracking-widest '>About</p>
          <h2 classNameName='py-4'>Who I Am</h2>
          <p classNameName='py-2 text-gray-600'>
            *Put in the hard work and you will see the results*
          </p>
          <p classNameName='py-2 text-gray-600'>
            Hello! I'm a full stack developer based in Los Angeles, California,
            with a passion for creating beautiful and functional websites. With
            a background in design and specialization in front-end development,
            I bring a unique perspective to every project I work on. I recently
            graduated from Flatiron BootCamp as a full stack development
            student, where I honed my skills in programming, database
            management, and more.
          </p>
          <p classNameName='py-2 text-gray-600'>
            As you explore my portfolio, you'll see examples of my work in
            front-end development, including projects that showcase my expertise
            in HTML, CSS, JavaScript, React, and Ruby on Rails. I'm also
            well-versed in back-end development and have experience with
            database technologies like MySQL.
          </p>
          <p classNameName='py-2 text-gray-600'>
            {' '}
            <p classNameName='py-2 text-gray-600'>
              If you're interested in learning more about my skills and
              experience, please don't hesitate to contact me with any
              questions. I'd love to hear from you!
            </p>
          </p>
          <p classNameName='py-2 text-gray-600'>
            I have developed this website using Next.JS and Tailwind CSS.
          </p>
          <a
            href='https://drive.google.com/file/d/1ZOonWvRlMncezDCuOPjTrrF73YIqZ1Vt/view'
            target='_blank'
            rel='noopener noreferrer'
            classNameName='py-2 text-blue-600 underline hover:bg-blue-100 '
          >
            Check out my Resume
          </a>
        </div>
        <div classNameName='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300'></div>
      </div>
    </section> */
  )
}

export default about
