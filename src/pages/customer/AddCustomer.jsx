import React, { useState } from 'react'

const AddCustomer = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [listCustomers, setListCustomers] = useState([{}])

    const makeListCustomers = () => {
        const customer = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        console.log(customer)
        setListCustomers([...listCustomers, customer])
        setFirstName('')
        setLastName('')
        setEmail('')
        console.log(listCustomers.length)
    }
  return (
    <main className='container bg-dark text-white' >
        <h1 className='text-center'>Add Customer</h1>
        <form>
            <div className='form-group'>
                <label>First Name</label>
                <input className='form-control' 
                    name='firstName' 
                    value={firstName}
                    id='firstName'
                    onChange={(e) => setFirstName(e.target.value)}
                /> 
            </div>
              <div className='form-group'>
                <label>Last Name</label>
                <input className='form-control' 
                    name='lastName' 
                    value={lastName}
                    id='lastName'
                    onChange={(e) => setLastName(e.target.value)}
                /> 
            </div>
              <div className='form-group'>
                <label>Email</label>
                <input className='form-control' 
                    name='email' 
                    value={email}
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                /> 
            </div>
            <button type='button' className='btn btn-primary' onClick={makeListCustomers}>Submit</button>
        </form>
    </main>
  )
}

export default AddCustomer