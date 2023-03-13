'use client'

import React from 'react'
import Image from 'next/image'
import TT from '../../public/projects/TravelTracker.png'
import WTE from '../../public/projects/WhereToEat.png'
import { useState } from 'react'
import Card from '../Card'

const projects = () => {
  const [showModal, setShowModal] = useState(false)

  let projects = [
    {
      name: 'WhereToEat',
      technologies: [
        '/javascript.png',
        '/react.png',
        '/rails.png',
        '/css.png',
        '/html.png',
      ],
      video: '/projects/WhereToEat.mp4',
      githubLink: 'https://github.com/Moszio/Meal-Randomizer-App',
      image: WTE,
    },
    {
      name: 'Travel Tracker',
      technologies: ['/javascript.png', '/css.png', '/html.png'],
      video: '/projects/FFS Logistics - Google Chrome - 16 October 2022.mp4',
      githubLink: 'https://github.com/Moszio/Project-Mapp-Website',
      image: TT,
    },
    {
      name: 'WhereTo',
      technologies: [
        '/javascript.png',
        '/react.png',
        '/rails.png',
        '/css.png',
        '/html.png',
      ],
      video: '/projects/WhereToEat',
      githubLink: 'https://github.com/Moszio/Meal-Randomizer-App',
      image: TT,
    },
  ]

  return (
    <section className='pt-[100px] h-full flex flex-wrap justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      {projects.map((project, index) => {
        return (
          <Card
            project={project}
            key={index}
            setShowModal={setShowModal}
            showModal={setShowModal}
          />
        )
      })}

      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*body*/}
                <div className='relative p-1 flex-auto'>
                  <video className='h-80' controls>
                    <source src='/projects/WhereToEat.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </section>
  )
}

export default projects
