import React from 'react'
import blackNavigatorInterior from '../assets/blackNavigatorInterior.jpg'
import nightOutBlack from '../assets/nightOutBlackService.jpg'
import blackAirport from '../assets/blackAirportTrip.jpg'
const Services = () => {
  return (
    <div className='w-full bg-black p-4'>
          <div className='flex flex-col justify-center items-center text-white mt-4'>
            <div>
              <h1 className='md:text-4xl sm:text-2xl text-xl font-bold text-white text-center'>Services</h1>
              <hr className='my-4 text-white' />
            </div>    
            <div className='grid md:grid-cols-3 gap-8'>
              <div className="bg-neutral-50 block max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img 
                    className="rounded-lg" 
                    src={blackNavigatorInterior}
                    alt="Blog post thumbnail" 
                  />
                </a>
                <a href="#">
                  <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                    Streamlining your design process today.
                  </h5>
                </a>
                <p className="mb-6 text-gray-600">
                  In today's fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 shadow-sm font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
                >
                  Read more
                  <svg 
                    className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-neutral-50 block max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img 
                    className="rounded-lg" 
                    src={nightOutBlack}
                    alt="Blog post thumbnail" 
                  />
                </a>
                <a href="#">
                  <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                    Streamlining your design process today.
                  </h5>
                </a>
                <p className="mb-6 text-gray-600">
                  In today's fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 shadow-sm font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
                >
                  Read more
                  <svg 
                    className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-neutral-50 block max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img 
                    className="rounded-lg" 
                    src={blackAirport}
                    alt="Blog post thumbnail" 
                  />
                </a>
                <a href="#">
                  <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                    Streamlining your design process today.
                  </h5>
                </a>
                <p className="mb-6 text-gray-600">
                  In today's fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 shadow-sm font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
                >
                  Read more
                  <svg 
                    className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
                
            </div>
          </div>
        </div>
  )
}

export default Services