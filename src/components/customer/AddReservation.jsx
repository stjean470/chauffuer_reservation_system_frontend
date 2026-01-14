import React, { useState, useRef } from 'react'
import { GoogleMap, useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api'
const AddReservation = () => {
  const [reservationType, setReservationType] = useState('')
  const [tripType, setTripType] = useState('')
  const [tripDuration, setTripDuration] = useState('')
  const [pickUpAddress, setPickUpAddress] = useState('')
  const [dropOffAddress, setDropOffAddress] = useState('')
  const [pickUpTime, setPickUpTime] = useState('')
  const [error, setError]  = useState({})

  const pickupAddressInputRef = useRef(null)
  const dropoffAddressInputRef = useRef(null)

  const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      libraries:["places"]
  })
  
  const handlePickupPlacesChange = () => {
    let places = pickupAddressInputRef.current.getPlaces()
    
    if(places && places.length > 0) {
      const address = places[0].formatted_address
      console.log("Selected address:", address)
      setPickUpAddress(address)
    }
  }

  const handleDropoffPlacesChange = () => {
    let places = dropoffAddressInputRef.current.getPlaces()
    
    if(places && places.length > 0) {
      const address = places[0].formatted_address
      console.log("Selected address:", address)
      setDropOffAddress(address)
    }
  }

  const makeReservation = (e) => {
    e.preventDefault()
    const dateObj = new Date(pickUpTime)
    if(reservationType.length > 0) {
      if (reservationType === 'Hourly') {
        const reservation = {
          reservationType: reservationType,
          pickUpAddress: pickUpAddress,
          pickUpDate: dateObj.toLocaleDateString(),
          time: dateObj.toLocaleTimeString(),
          tripDuration: tripDuration
        }
        console.log(reservation)
      }else {
        const reservation = {
          reservationType: reservationType,
          pickUpAddress: pickUpAddress,
          dropOffAddress: dropOffAddress,
          pickUpDate: dateObj.toLocaleDateString(),
          time: dateObj.toLocaleTimeString(),
        }
        console.log(reservation)
      }
    }else {
      return;
    }
    
  }
  return (
    <main className='container bg-dark text-white'>
      <h1 className='text-center'>Add Reservation</h1>
      <form>
        <div className='form-group'>
          <label>Reservation Type</label>
          <select className='form-select' value={reservationType} onChange={(e) => setReservationType(e.target.value)}>
            <option value=''>Pick between one-way or Hourly Trip</option>
            <option value='One-way'>One-Way</option>
            <option value='Hourly'>Hourly</option>
          </select>
        </div>

        { reservationType === 'Hourly' ? (
          <>
            <div className='form-group'>
              <label>Pickup Address</label>
              {isLoaded && (
                <StandaloneSearchBox
                  onLoad={(ref) => pickupAddressInputRef.current = ref}
                  onPlacesChanged={handlePickupPlacesChange}>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Pickup Address'
                    id='pickUpAddress'
                    name='pickUpAddress'
                    value={pickUpAddress}
                    onChange={(e) => setPickUpAddress(e.target.value)}
                  />
                </StandaloneSearchBox>
              )}
            </div>

            <div className='form-group'>
              <label>Pickup Time</label>
              <input
                type='datetime-local'
                className='form-control'
                placeholder='Destination Address'
                id='pickUpTime'
                name='pickUpTime'
                value={pickUpTime}
                onChange={(e) => setPickUpTime(e.target.value)}
                step='1800'
              />
            </div>
            <div className='form-group'>
              <label>Time Duration</label>
              <select className='form-select' value={tripDuration} onChange={(e) => setTripDuration(e.target.value)}>
                <option value=''>How Long?</option>
                <option value='All Day'>All Day</option>
                <option value='One'>1 Hour</option>
                <option value='Two'>2 Hours</option>
                <option value='Three'>3 Hours</option>
                <option value='Four'>4 Hours</option>
                <option value='Five'>5 Hours</option>
                <option value='Six'>6 Hours</option>
              </select>
            </div>
            <button type='button' className='btn btn-success' onClick={makeReservation}>Submit</button>
          </>
          
        ): (
          <>
            <div className='form-group'>
              <label>Trip Type</label>
              <select className='form-select' value={tripType} onChange={(e) => setTripType(e.target.value)}>
                <option value=''>Select a Trip Type</option>
                <option value='Airport'>Airport</option>
                <option value='Concert/Sports Event'>Concert/Sports Event</option>
                <option value='Festival'>Festival</option>
                <option value='Wedding'>Wedding</option>
                <option value='Business'>Business/Corporate</option>
                <option value='Appointment'>Appointment</option>
                <option value='Regular'>Regular</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Pickup Address</label>
              {isLoaded && (
                <StandaloneSearchBox
                  onLoad={(ref) => pickupAddressInputRef.current = ref}
                  onPlacesChanged={handlePickupPlacesChange}>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Pickup Address'
                    id='pickUpAddress'
                    name='pickUpAddress'
                    value={pickUpAddress}
                    onChange={(e) => setPickUpAddress(e.target.value)}
                  />
                </StandaloneSearchBox>
              )}
            </div>
            <div className='form-group'>
              <label>Dropoff Address</label>
              {isLoaded && (
                <StandaloneSearchBox
                  onLoad={(ref) => dropoffAddressInputRef.current = ref}
                  onPlacesChanged={handleDropoffPlacesChange}>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Destination'
                    id='dropOffAddress'
                    name='dropOffAddress'
                    value={dropOffAddress}
                    onChange={(e) => setDropOffAddress(e.target.value)}
                  />
                </StandaloneSearchBox>

              )}
            </div>
            <div className='form-group'>
              <label>Pickup Time</label>
              <input
                type='datetime-local'
                className='form-control'
                id='pickUpTime'
                name='pickUpTime'
                value={pickUpTime}
                onChange={(e) => setPickUpTime(e.target.value)}
                step='1800'
              />
            </div>
            
            <button type='button' className='btn btn-success' onClick={makeReservation}>Submit</button>
          </>
        )}     
      </form>
    </main>
  )
}

export default AddReservation