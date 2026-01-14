import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCustomer from './components/customer/AddCustomer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AddReservation from './components/customer/AddReservation'
import LoginSignUp from './components/customer/loginSignUp'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addCustomer' element={<AddCustomer />}></Route>
        <Route path='/addReservation' element={<AddReservation />}></Route>
        <Route path='/login' element={<LoginSignUp />}></Route>
      </Routes>
    </Router>
  )
}

export default App
