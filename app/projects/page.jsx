import React from 'react'
import Image from 'next/image'
import TT from '../../public/projects/TravelTracker.png'
import WTE from '../../public/projects/WhereToEat.png'

const projects = () => {
  return (
    <section class='pt-[100px] flex flex-wrap justify-center items-center'>
      <div class='flex flex-wrap items-center justify-center'>
        <div class='container max-w-[344px] bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-1'>
          <div class='h-2/4 overflow-hidden'>
            <Image class='w-full rounded-t' src={TT} />
          </div>
          <div class='flex justify-start px-5 -mt-6 mb-5'>
            <span clspanss='block relative h-11 w-22'>
              <img
                alt='Photo by aldi sigun on Unsplash'
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                class='mx-auto object-cover rounded-full h-12 w-12 bg-white p-1'
              />
            </span>
          </div>
          <div class=''>
            <div class='px-6 mb-1'>
              <h2 class='text-2xl font-bold text-blue-500 dark:text-gray-300'>
                Travel Tracker
              </h2>

              <div class='justify-center px-4 py-2 cursor-pointer bg-blue-500 max-w-min mx-auto mt-4 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200'>
                Preview
              </div>
              <div class='flex flex-wrap justify-center gap-2 sm:gap-4 mt-4'>
                <button class='text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300'>
                  <svg
                    class='w-7 h-7 fill-current'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-wrap items-center justify-center'>
        <div class='container max-w-[344px] bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-1'>
          <div class='h-2/4 overflow-hidden'>
            <Image class='w-full rounded-t' src={WTE} />
          </div>
          <div class='flex justify-start px-5 -mt-6 mb-5'>
            <span clspanss='block relative h-11 w-22'>
              <img
                alt='Photo by aldi sigun on Unsplash'
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                class='mx-auto object-cover rounded-full h-12 w-12 bg-white p-1'
              />
            </span>
          </div>
          <div class=''>
            <div class='px-6 mb-1'>
              <h2 class='text-2xl font-bold text-blue-500 dark:text-gray-300'>
                Travel Tracker
              </h2>

              <div class='justify-center px-4 py-2 cursor-pointer bg-blue-500 max-w-min mx-auto mt-4 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200'>
                Preview
              </div>
              <div class='flex flex-wrap justify-center gap-2 sm:gap-4 mt-4'>
                <button class='text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300'>
                  <svg
                    class='w-7 h-7 fill-current'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-wrap items-center justify-center'>
        <div class='container max-w-[344px] bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-1'>
          <div class='h-2/4 overflow-hidden'>
            <Image class='w-full rounded-t' src={TT} />
          </div>
          <div class='flex justify-start px-5 -mt-6 mb-5'>
            <span clspanss='block relative h-11 w-22'>
              <img
                alt='Photo by aldi sigun on Unsplash'
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                class='mx-auto object-cover rounded-full h-12 w-12 bg-white p-1'
              />
            </span>
          </div>
          <div class=''>
            <div class='px-6 mb-1'>
              <h2 class='text-2xl font-bold text-blue-500 dark:text-gray-300'>
                Travel Tracker
              </h2>

              <div class='justify-center px-4 py-2 cursor-pointer bg-blue-500 max-w-min mx-auto mt-4 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200'>
                Preview
              </div>
              <div class='flex flex-wrap justify-center gap-2 sm:gap-4 mt-4'>
                <button class='text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300'>
                  <svg
                    class='w-7 h-7 fill-current'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default projects
