import React from 'react'

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action=''>
            <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='abc@gmail.com' className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control rounded-0'/>
            </div>

            <button className='btn btn-success w-100'><strong>Log in</strong></button>
            <p>You are agree to our terms and policies</p>
            <button className='btn btn-default border w-100 bg-light rounded-0'>Create Account</button>
                    </form>
        </div>
    </div>
  )
}

export default Login
