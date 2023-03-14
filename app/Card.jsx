import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Card = ({ project }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className='flex flex-wrap items-center justify-center '>
        <div className='container bg-white rounded dark:bg-gray-800 shadow-xl shadow-gray-400 transform duration-200 easy-in-out m-1'>
          <div className='h-2/4 overflow-hidden'>
            <Image
              className='object-cover h-40 w-80 rounded-t '
              src={project.image}
              alt={project.name}
              priority={true}
            />
          </div>
          <div className='flex justify-start px-5 -mt-6 mb-5'>
            <span clspanss='block relative h-11 w-22'>
              <a href={project.githubLink}>
                <img
                  alt='githubLogo'
                  src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                  className='mx-auto object-cover rounded-full h-12 w-12 bg-white p-1 cursor-pointer hover:scale-110 ease-in duration-300'
                />
              </a>
            </span>
          </div>
          <div className=''>
            <div className='px-6 mb-1'>
              <h2 className='text-2xl font-bold text-blue-500 dark:text-gray-300'>
                {project.name}
              </h2>

              <div
                className='justify-center px-4 py-2 cursor-pointer bg-blue-500 max-w-min mx-auto mt-4 rounded-lg text-white hover:bg-blue-800 hover:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-200'
                onClick={() => setShowModal(true)}
              >
                Preview
              </div>
              <div className='flex flex-wrap justify-center gap-2 sm:gap-4 mt-4'>
                {project.technologies.map((technology, index) => {
                  return (
                    <button
                      className='text-green-900 hover:text-green-700 p-1 sm:p-1 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300 hover:scale-110 ease-in duration-300 grayscale hover:grayscale-0'
                      key={index}
                    >
                      <img
                        src={technology}
                        className='w-5 h-5 fill-current'
                        alt='react-logo'
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*body*/}
                <div className='relative p-1 flex-auto'>
                  {project.video ? (
                    <video className='h-80' controls>
                      <source src={project.video} type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      className='object-cover h-55 w-110 rounded-t '
                      src={project.image}
                      alt={project.name}
                    />
                  )}
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
    </>
  )
}

export default Card
