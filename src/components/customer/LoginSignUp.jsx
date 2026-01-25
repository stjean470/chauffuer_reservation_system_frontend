import React from 'react'
import interiorNavigator from '../../assets/2023-lincoln-navigator-interior.jpg'
const LoginSignUp = () => {
  return (
    <div style={{
      backgroundImage: `url(${interiorNavigator})`,
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw'
    }}
        className='flex justify-center items-center'>
        <div className='flex flex-col bg-white bg-opacity-80 p-8 rounded-lg shadow-lg m-4 w-full max-w-md'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Login or Sign Up</h2>
            <form className='space-y-4'>
                <div>
                    <label className='block text-gray-700'>Email:</label>
                    <input type='email' className='w-full px-3 py-2 border rounded' placeholder='Enter your email' />
                </div>
                <div>
                    <label className='block text-gray-700'>Password:</label>
                    <input type='password' className='w-full px-3 py-2 border rounded' placeholder='Enter your password' />
                </div>
                <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300'>Login / Sign Up</button>
            </form>
        </div>

        

    </div>
  )
}

export default LoginSignUp