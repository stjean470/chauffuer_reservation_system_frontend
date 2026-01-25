import React from 'react'
import nightAtlanta from '../assets/nightAtlanta.jpg'
const Booking = () => {
  return (
    <div className='w-full text-white text-center flex flex-col justify-center items-center' style={{backgroundImage: `url(${nightAtlanta})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px'}}>
        <h1 className='m-2 md:text-6xl sm:text-4xl text-2xl font-bold'>Book with Us Today</h1>
        <p className='m-2 text-xl'>Your next quality ride is with us</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
            Book Now
        </button>
    </div>
  )
}

export default Booking