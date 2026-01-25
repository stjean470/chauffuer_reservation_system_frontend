import React from 'react'
import blackTruckFleet from '../assets/blackTruckFleet.jpg'
const Area = () => {
  return (
    <div className='w-full bg-black grid md:grid-cols-2 gap-2 p-4'>
        <div>
            <img 
                className="rounded-lg h-[75vh] w-full object-cover" 
                src={blackTruckFleet}
                alt="Black Limousine Fleet"
            />
        </div>
        <div className='flex flex-col text-white p-4 justify-center'>
            <h1 className='md:text-4xl sm:text-2xl text-xl font-bold text-white'>Areas We Serve</h1>
            <p>Our services cover a wide range of areas within the Metropolitan Area of Atlanta. Areas include Roswell, Marietta, Henry County, to ensure you get the best chauffeur service wherever you are.</p>
        </div>
    </div>
  )
}

export default Area