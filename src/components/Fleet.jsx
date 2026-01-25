import React from 'react'
import { Card } from 'flowbite-react'
import blackQx from '../assets/blackqx50.jpg'
import blackYukon from '../assets/blackYukon.jpg'
import blackTruckFleet from '../assets/blackTruckFleet.jpg'
const Fleet = () => {
  return (
    <div className='w-full bg-white p-4 flex flex-col justify-center items-center'>
        <div>
            <h1 className='md:text-4xl sm:text-2xl text-xl font-bold text-black text-center'>Our Fleet</h1>
            <hr className='my-4 text-gray-500' />

        </div>
        <div className='grid md:grid-cols-3 gap-8'>
            <Card
                className="max-w-md bg-black text-white"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={blackQx}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card
                className="max-w-md bg-black text-white"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={blackYukon}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card
                className="max-w-md bg-black text-white"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={blackTruckFleet}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
        </div>
        

       
    </div>
  )
}

export default Fleet