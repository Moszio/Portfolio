import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/profilePic.jpg'

const about = () => {
  return (
    <section className='h-screen md:flex justify-center items-center py-[80px]'>
      <div className=' md:flex rounded-xl p-8 md:p-0 md:my-2'>
        <Image
          className=' rounded-md md:rounded-r-full  mx-auto shadow-xl shadow-gray-400 m-w-12 m-h-12 w-8/12 md:w-full'
          src={profilePic}
          alt='avatar'
          priority={true}
        />
      </div>
      <div className='mx-2 md:mx-0 md:p-6 text-center md:text-left  '>
        <h1 className='text-gray-700 text-3xl md:text-5xl font-medium md:self-start md:ml-12 align '>
          About Me
        </h1>
        <div className='text-gray-600 bg-slate-100 rounded-xl p-2 mt-4 shadow-xl shadow-gray-400 pt-6 md:p-4 text-center md:text-left space-y-4'>
          <p>
            <span className='font-bold'>Hello!</span> I'm a full stack developer
            based in New York, NY, with the ability to contribute to JavaScript,
            React.js, Nexrt.js and working with Ruby, Ruby on Rails to create
            intuitive REST API. During my software engineer studies with
            Flatiron School, I gained experience coding under the direction of a
            team, collaborating on software projects, implementing design
            technics, and creating code structure. Before becoming a coder, I
            had a successful career in the hotel/restaurant management field,
            where I developed skills in problem solving, teamworking (with small
            and large groups), balancing customer satisfaction while meeting
            company goals and growth. Managing multiple departments and large
            teams helped me to be more organized and detail oriented, meet
            deadlines and improve on operation efficiency. The rest of the time
            I enjoy being a husband, cook and traveler.
          </p>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark:text-sky-400'>Andor Lato</div>
            <div className='text-slate-700 dark:text-slate-500'>
              Full Stack Software Engineer
            </div>
          </figcaption>
        </div>
      </div>
    </section>
  )
}

export default about
