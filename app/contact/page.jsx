'use client'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import phone from '../../public/phone.png'
import email from '../../public/email.png'
import location from '../../public/location.png'

const contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <section className='px-6 h-screen flex justify-center items-center pt-[500px] md:pt-0'>
      <div className='text-gray-800 w-full'>
        <div className='flex flex-wrap md:px-auto justify-center '>
          <div className='w-fit grow-0 shrink-0 basis-auto mb-6 md:mb-0 md:w-2/4 px-3 lg:px-6'>
            <h2 className='text-3xl font-bold mb-6 text-center'>Contact me</h2>
            {/* <p className='text-gray-500 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, modi accusantium ipsum corporis quia asperiores
              dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
              autem omnis fugiat perspiciatis? Ad, veritatis.
            </p> */}
            <div className='flex justify-center items-center gap-1 md:gap-5 flex-wrap'>
              <div className=' w-full h-36 md:w-48 gap-4 py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                <Image
                  src={phone}
                  alt='html'
                  width={40}
                  height={40}
                  className='mx-auto'
                  // maxWidth={50}
                />
                <div className='text-center text-gray-600'>
                  <p>Phone</p>
                  <p>(202)-706-2003</p>
                </div>
              </div>
              <div className='block w-full h-36 md:w-48 gap-4 py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                <Image
                  src={email}
                  alt='html'
                  width={40}
                  height={40}
                  className='mx-auto '
                  // maxWidth={50}
                />
                <div className='text-center text-gray-600'>
                  <p>Email</p>
                  <p>latandor@gmail.com</p>
                </div>
              </div>
              <div className='block w-full h-36 md:w-48 gap-4 py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                <Image
                  src={location}
                  alt='html'
                  width={40}
                  height={40}
                  className='mx-auto'
                />
                <div className='text-center text-gray-600'>
                  <p>Location</p>
                  <p>New York, NY</p>
                </div>
              </div>
            </div>
          </div>
          <div className='grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6 text-gray-600 bg-slate-100 rounded-xl p-8 shadow-xl shadow-gray-400'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-group mb-6'>
                <input
                  type='text'
                  name='user_name'
                  className='form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleInput7'
                  placeholder='Name'
                />
              </div>
              <div className='form-group mb-6'>
                <input
                  type='email'
                  name='user_email'
                  className='form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleInput8'
                  placeholder='Email address'
                />
              </div>
              <div className='form-group mb-6'>
                <textarea
                  name='message'
                  className='
              form-control
              block
              w-full
              max-h-[200px]
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            '
                  id='exampleFormControlTextarea13'
                  rows='3'
                  placeholder='Message'
                ></textarea>
              </div>

              <button
                type='submit'
                value='Send'
                className='
            w-full
            px-6
            py-2.5
            bg-blue-500
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contact
