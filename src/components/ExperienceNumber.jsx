import React from 'react'

export default function ExperienceNumber() {
  return (
    <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4'>
          <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-white mx-4">
           +02 <br/> <span className="text-gray-600 text-sm 2xl:text-3xl">Years of experience</span>
          </h2>
          <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-white mx-4">
           +38 <br/><span className="text-gray-600 text-sm 2xl:text-3xl">Projects completed</span>
          </h2>
          <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-white mx-4">
           +20 <br/><span className="text-gray-600 text-sm 2xl:text-3xl">worldwide clients</span>
          </h2>
      </div>
  )
}