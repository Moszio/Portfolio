'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <div className='z-10'>
      <nav className='w-full bg-gray-800 shadow fixed z-20 '>
        <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block ease-in duration-500'>
              <a href='#'>
                <h2 className='text-3xl text-white font-bold'>A L</h2>
              </a>

              <div className='relative'>
                <div className='absolute -inset-1 bg-blue-600 rounded-lg blur md:hidden'></div>
                <a href='https://docs.google.com/document/d/1iA7OuETwSOSlJXAvJWkGIei61ugP0KWS_y5fO3j9pxM/edit?usp=sharing'>
                  <button
                    type='button'
                    className=' relative text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:hidden'
                  >
                    Resume
                  </button>
                </a>
              </div>

              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6 text-white'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 '>
                <li className='text-white'>
                  <Link href='/' onClick={() => setNavbar(false)}>
                    Home
                  </Link>
                </li>
                <li className='text-white'>
                  <Link href='/about' onClick={() => setNavbar(false)}>
                    About
                  </Link>
                </li>
                <li className='text-white'>
                  <Link href='/skills' onClick={() => setNavbar(false)}>
                    Skills
                  </Link>
                </li>
                <li className='text-white'>
                  <Link href='/projects' onClick={() => setNavbar(false)}>
                    Projects
                  </Link>
                </li>
                <li className='text-white'>
                  <Link href='/contact' onClick={() => setNavbar(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute -inset-1.5 bg-blue-600 rounded-lg blur-md hidden md:flex'></div>
            <a href='https://docs.google.com/document/d/1iA7OuETwSOSlJXAvJWkGIei61ugP0KWS_y5fO3j9pxM/edit?usp=sharing'>
              <button
                type='button'
                className=' relative text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden md:flex'
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
