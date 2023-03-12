import React from 'react'
import Image from 'next/image'
const projects = () => {
  return (
    <section className='h-screen'>
      <div className='flex h-screen gap-3 justify-center items-center flex-wrap'>
        <figure className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
          <a href='#'>
            <img
              className='rounded-lg '
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
              alt='image description'
            />
          </a>
          <figcaption className='absolute px-4 text-lg text-white bottom-6'>
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
        <figure className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
          <a href='#'>
            <img
              className='rounded-lg'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
              alt='image description'
            />
          </a>
          <figcaption className='absolute px-4 text-lg text-white bottom-6'>
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
        <figure className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
          <a href='#'>
            <img
              className='rounded-lg'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
              alt='image description'
            />
          </a>
          <figcaption className='absolute px-4 text-lg text-white bottom-6'>
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default projects
