import React, { useState, useRef } from 'react'
import { GoogleMap, useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api'
import { Card, Label, TextInput } from 'flowbite-react'
import Nav from '../../Nav'
const AddReservation = () => {
  const [reservationType, setReservationType] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [tripType, setTripType] = useState('')
  const [tripDuration, setTripDuration] = useState('')
  const [pickUpAddress, setPickUpAddress] = useState('')
  const [dropOffAddress, setDropOffAddress] = useState('')
  const [pickUpTime, setPickUpTime] = useState('')
  const [numGuests, setNumGuests] = useState(1);
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
          customer: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
          },
          pickUpAddress: pickUpAddress,
          pickUpDate: dateObj.toLocaleDateString(),
          time: dateObj.toLocaleTimeString(),
          tripDuration: tripDuration,
          numGuests: numGuests
        }
        console.log(reservation)
      }else {
        const reservation = {
          reservationType: reservationType,
          customer: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
          },
          tripType: tripType,
          pickUpAddress: pickUpAddress,
          dropOffAddress: dropOffAddress,
          pickUpDate: dateObj.toLocaleDateString(),
          time: dateObj.toLocaleTimeString(),
          numGuests: numGuests
        }
        console.log(reservation)
      }
    }else {
      return;
    }
    
  }
  return (
    <>
      <Nav />
      <div className='w-full flex flex-col justify-center items-center bg-black text-white'>
        <Card className='max-w-sm bg-white text-black p-6 my-8'>
          <h1 className='text-center md:text-3xl sm:text-2xl text-xl font-bold'>Add Reservation</h1>
          <form>
            <div className='block mb-2'>
              <Label>Reservation Type</Label>
            </div>
            <select className='block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand shadow-xs placeholder:text-body' value={reservationType} onChange={(e) => setReservationType(e.target.value)}>
              <option value=''>Pick between one-way or Hourly Trip</option>
              <option value='One-way'>One-Way</option>
              <option value='Hourly'>Hourly</option>
            </select>
            { reservationType === 'Hourly' ? (
            <>

              <div>
                <div className='block mb-2'>
                  <Label>First Name</Label>
                </div>
                <TextInput
                  placeholder='First Name'
                  id='firstName'  
                  name='firstName'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              
              <div>
                <div className='block mb-2'>
                  <Label>Last Name</Label>
                </div>
                <TextInput
                  placeholder='Last Name'
                  id='lastName'
                  name='lastName'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <div className='block mb-2'>
                  <Label>Email</Label>
                </div>
                <TextInput
                  placeholder='Email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <div className='block mb-2'>
                  <Label>Phone Number</Label>
                </div>
                <TextInput
                  placeholder='Phone Number'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div>
                <div className='block mb-2'>
                  <Label>Pickup Address</Label>
                </div>
                {isLoaded && (
                  <StandaloneSearchBox
                    onLoad={(ref) => pickupAddressInputRef.current = ref}
                    onPlacesChanged={handlePickupPlacesChange}>
                    <TextInput
                      placeholder='Pickup Address'
                      id='pickUpAddress'
                      name='pickUpAddress'
                      value={pickUpAddress}
                      onChange={(e) => setPickUpAddress(e.target.value)}
                    />
                  </StandaloneSearchBox>
                )}
              </div>
              <div>
                <div className='block mb-2'>
                  <Label>Pickup Time</Label>
                </div>
                <input
                  type='datetime-local'
                  className='block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body'
                  placeholder='Destination Address'
                  id='pickUpTime'
                  name='pickUpTime'
                  value={pickUpTime}
                  onChange={(e) => setPickUpTime(e.target.value)}
                  step='1800'
                />
              </div>
              <div>
                <div className='block mb-2'>
                  <Label>Reservation Type</Label>
                </div>
                <select className='block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body' value={tripDuration} onChange={(e) => setTripDuration(e.target.value)}>
                  <option value=''>How Long?</option>
                  <option value='All Day'>All Day</option>
                  <option value='1'>1 Hour</option>
                  <option value='2'>2 Hours</option>
                  <option value='3'>3 Hours</option>
                  <option value='4'>4 Hours</option>
                  <option value='5'>5 Hours</option>
                  <option value='6'>6 Hours</option>
                </select>
              </div>
              <div>
                <div className='block mb-2'>
                  <Label>Number of Guests</Label>
                </div>
                <input
                  type='number'
                  min='1' max='10'  
                  className='block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body'
                  id='numGuests'
                  name='numGuests'
                  value={numGuests}
                  onChange={(e) => setNumGuests(e.target.value)}
                />
              </div>
              <button type='button' className='mt-2 px-4 py-2 bg-black text-white w-full rounded-lg hover:bg-brand-dark focus:ring-brand focus:ring-offset-2' onClick={makeReservation}>Submit</button>
            </>
            
          ): ( <>

              <div>
                <div className='block mb-2'>
                  <Label>First Name</Label>
                </div>
                <TextInput
                  placeholder='First Name'
                  id='firstName'  
                  name='firstName'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              
              <div>
                <div className='block mb-2'>
                  <Label>Last Name</Label>
                </div>
                <TextInput
                  placeholder='Last Name'
                  id='lastName'
                  name='lastName'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <div className='block mb-2'>
                  <Label>Email</Label>
                </div>
                <TextInput
                  placeholder='Email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <div className='block mb-2'>
                  <Label>Phone Number</Label>
                </div>
                <TextInput
                  placeholder='Phone Number'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <div className='block mb-2'>
                  <Label>Trip Type</Label>
                </div>
                <select className='block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body' value={tripType} onChange={(e) => setTripType(e.target.value)}>
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
              <div>
                <div className='block mb-2'>
                  <Label>Pickup Address</Label>
                </div>
                {isLoaded && (
                  <StandaloneSearchBox
                    onLoad={(ref) => pickupAddressInputRef.current = ref}
                    onPlacesChanged={handlePickupPlacesChange}>
                    <TextInput
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
                <div className='block mb-2'>
                  <Label>Dropoff Address</Label>
                </div>
                {isLoaded && (
                  <StandaloneSearchBox
                    onLoad={(ref) => dropoffAddressInputRef.current = ref}
                    onPlacesChanged={handleDropoffPlacesChange}>
                    <TextInput
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
                  className='block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand shadow-xs placeholder:text-body'
                  id='pickUpTime'
                  name='pickUpTime'
                  value={pickUpTime}
                  onChange={(e) => setPickUpTime(e.target.value)}
                  step='1800'
                />
              </div>

              <div>
                <div className='block mb-2'>
                  <Label>Number of Guests</Label>
                </div>
                <input
                  type='number'
                  min='1' max='10'  
                  className='block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body'
                  id='numGuests'
                  name='numGuests'
                  value={numGuests}
                  onChange={(e) => setNumGuests(e.target.value)}
                />
              </div>

              <button type='button' className='mt-2 px-4 py-2 bg-black text-white rounded-lg w-full hover:bg-brand-dark focus:ring-brand focus:ring-offset-2' onClick={makeReservation}>Submit</button>
          </> ) }
            
          </form>
        </Card>

          
      </div>
    </>
  )
}

export default AddReservation