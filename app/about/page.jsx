import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/profilePic.jpg'

const about = () => {
  return (
    <section className='h-screen md:flex justify-center items-center py-[80px]'>
      <div className='md:flex rounded-xl p-8 md:p-0 md:my-2'>
        <Image
          className=' md:rounded-r-full  mx-auto shadow-xl shadow-gray-400'
          src={profilePic}
          alt='avatar'
        />
      </div>
      <div className='pt-6 md:p-12 text-center md:text-left  '>
        <p className='text-gray-600'>
          Hello! I'm a full stack developer based in New York, NY, with the
          ability to contribute to JavaScript and working with Ruby on Rails as
          an API. On the side I like sharing my increasing knowledge as Software
          Engineer with others around me. Before becoming a coder I had a
          successful career in the hotel/restaurant management field, where I
          developed skills in problem solving, teamworking (with small and large
          groups), balancing customer satisfaction while meeting company goals
          and growth. Managing multiple departments and large teams helped me to
          be more organized and detail oriented, meet deadlines and improve on
          operation efficiency. The rest of the time I enjoy being a husband,
          cook, traveler and marvel enthusiast.
        </p>
      </div>
      {/* 
      <figure className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 my-12 shadow-lg shadow-gray-400'>
        <Image
          className='w-24 h-24 md:w-48 md:h-auto md:rounded-r-full rounded-full mx-auto'
          src={profilePic}
          alt=''
          width={388}
          height={512}
        />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4 '>
          <blockquote>
            <p className='text-gray-600'>
              Hello! I'm a full stack developer based in New York, NY, with a
              passion for creating beautiful and functional websites. With a
              background in design and specialization in front-end development,
              I bring a unique perspective to every project I work on. I
              recently graduated from Flatiron BootCamp as a full stack
              development student, where I honed my skills in programming,
              database management, and more. As you explore my portfolio, you'll
              see examples of my work in front-end development, including
              projects that showcase my expertise in HTML, CSS, JavaScript,
              React, and Ruby on Rails. I'm also well-versed in back-end
              development and have experience with database technologies like
              MySQL. If you're interested in learning more about my skills and
              experience, please don't hesitate to contact me with any
              questions. I'd love to hear from you! I have developed this
              website using Next.JS and Tailwind CSS.
            </p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark:text-sky-400'>Andor Lato</div>
            <div className='text-slate-700 dark:text-slate-500'>
              Full Stack Software Engineer, New York
            </div>
          </figcaption>
        </div>
      </figure> */}
    </section>
  )
}

export default about
