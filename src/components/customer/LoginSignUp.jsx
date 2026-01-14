import React from 'react'

const LoginSignUp = () => {
  return (
    <main className='justify-content-center align-items-center'>
        <div className='container mt-4 text-black bg-white align-items-center lead'>
            <h1 className='text-center'>Login</h1>
            <form>
                <div className='form-group'>
                    <label>Email</label>
                    <input 
                        type='email'
                        required
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input 
                        type='password'
                        required
                        className='form-control'
                    />
                </div>
                <div className='form-group text-center mt-4'>
                    <div className='row'>
                        <div className='col'>
                            <button type='button' className='btn btn-primary'>Login</button>
                        </div>
                        <div className='col'>
                            <button type='button' className='btn btn-primary'>Continue with Google</button>
                        </div>
                    </div>
                </div>
            
            </form>
        </div>
    </main>
  )
}

export default LoginSignUp