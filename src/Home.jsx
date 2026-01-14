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
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import styles from './styles.module.css'
const Home = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const[showSideBar, setSideBar] = useState(false)
  const handleSideBar = () => setSideBar(!showSideBar)
  return (
    <>
      <header className='d-flex justify-content-center'>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
          {/* Toggler button - only visible on small screens */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleNavbar}
            aria-controls="navbarNav" 
            aria-expanded={!isCollapsed} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/addCustomer' className='nav-link' onClick={() => setIsCollapsed(true)}>
                  Add Customer
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/addReservation' className='nav-link' onClick={() => setIsCollapsed(true)}>
                  Add Reservation
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/*<Sidebar showSidebar={showSideBar} handleSideBar={handleSideBar} />
        <div className='flex-grow-1'>
          <Navbar />
        </div> */}
      </header>
      <main>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100 h-auto' src={navigatorInterior} style={{height: '200px' , objectFit: 'cover'}}/>
            <Carousel.Caption>
              <h3>Lincoln Navigator</h3>
              <p>Book trips with us</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100 h-auto' src={blackNavigatorExterior} style={{height: '200px', objectFit: 'cover'}}/>
            <Carousel.Caption>
              <h3>Lincoln Navigator</h3>
              <p>Book trips with us</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='container'>
          <div className='jumbotron text-white mt-4 lead'>
            <h1 className='display-4 text-center'>Services</h1>
            <hr className='my-4' />
            <div className='row'>
              <div className='col-md-4'>
                <div className={`${styles.customCard} card`}>
                  <img 
                    src={blackAirport} 
                    className='card-img-top'
                    style ={{width: '100%',
                      height: '200px',
                      objectFit: 'cover'}}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Airport</h5>
                    <p className='card-text'>Airport Run</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <img 
                    src={blackNavigatorInterior} 
                    className='card-img-top'
                    style ={{width: '100%',
                      height: '200px',
                      objectFit: 'cover'}}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Airport</h5>
                    <p className='card-text'>Airport Run</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <img 
                    src={nightOutBlack} 
                    className='card-img-top'
                    style ={{width: '100%',
                      height: '200px',
                      objectFit: 'cover'}}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Airport</h5>
                    <p className='card-text'>Airport Run</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='jumbotron text-white mt-4 lead'>
            <h1 className='text-center'>Our Fleet</h1>
            <hr className='my-4' />
            <div className='row'>
              <div className='col-md-4'>
                <div className='card'>
                  <img 
                    src={blackQx} 
                    className='card-img-top'
                    style ={{width: '100%',
                      height: '200px',
                      objectFit: 'cover'}}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Airport</h5>
                    <p className='card-text'>Airport Run</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <img 
                    src={blackYukon} 
                    className='card-img-top'
                    style ={{width: '100%',
                      height: '200px',
                      objectFit: 'cover'}}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Airport</h5>
                    <p className='card-text'>Airport Run</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <img 
                    src={blackTruckFleet} 
                    className='card-img-top'
                    style ={{width: '100%',
                      height: '200px',
                      objectFit: 'cover'}}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Airport</h5>
                    <p className='card-text'>Airport Run</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-5 text-white">
          <hr className='my-4' />
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={blackTruckFleet} className="d-block mx-lg-auto img-fluid" alt="Black Truck Fleet" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Areas we serve</h1>
              <p className="lead">We serve areas all across the Metropolitan Area of Atlanta. Whether your going on a Airport Trip, or a simple night out, we serve areas such as Norcross, Conyers, Sandy Springs, etc</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link to='/addReservation' className='btn btn-primary btn-lg px-4 me-md-2'>Book</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container text-center d-flex justify-content-center flex-column align-items-center lead' style={{backgroundImage: `url(${nightAtlanta})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px'}}>
          <hr className='my-4'/> 
          <div className='jumbotron text-white'>
            <h1>Book with Us today</h1>
            <p>Your next quality ride is with is</p>
            <Link to='/addReservation' className='btn btn-primary'>Book</Link>
          </div>
        </div>
      </main>
    </>
  )
}


export default Home