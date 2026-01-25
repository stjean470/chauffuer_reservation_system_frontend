import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import navigatorInterior from './assets/2022-lincoln-navigator-interior.jpg'
import blackAirport from './assets/blackAirportTrip.jpg'
import blackNavigatorInterior from './assets/blackNavigatorInterior.jpg'
import nightOutBlack from './assets/nightOutBlackService.jpg'
import blackQx from './assets/blackqx50.jpg'
import blackYukon from './assets/blackYukon.jpg'
import blackTruckFleet from './assets/blackTruckFleet.jpg'
import nightAtlanta from './assets/nightAtlanta.jpg'
import blackNavigatorExterior from './assets/blackNavigatorExterior.jpg'
import { Carousel } from 'react-bootstrap'
import Nav from './Nav'
import Sidebar from './Sidebar'
import styles from './styles.module.css'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Area from './components/Area'
import Booking from './components/Booking'
const Home = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  
  return (
    <>
      <Nav />
      <main>
        {/* make a jumbotron hero div using tailwind css. have a background image of blackNavigatorInterior as the background image. Add a heading text with the button that says book now   */}
        <div className='text-white text-center flex flex-col justify-center items-center' style={{backgroundImage: `url(${blackNavigatorExterior})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px'}}>
          <h1 className='m-2 md:text-6xl sm:text-4xl text-2xl font-bold'>Chauffeur Reservation System</h1>
          <p className='m-2 text-xl'>Your next quality ride is with us</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Book Now
          </button>
        </div>
        <Services />

        <Fleet />
        <Area />   
        
        <Booking />
      </main>
    </>
  )
}


export default Home