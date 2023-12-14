import React from 'react'
import { Form, Link } from 'react-router-dom'
import './loginstyle.css'

export default function Login() {
  return (
    <>
    <div className='container logi-wrapper py-5 '>
      <div className='row'>
        <div className=' col-12'>
          <div className=' auth-card'>
            <h3 className='text-center'>Login</h3>
            <form action='' className='m-3'>
              
              <div>
                <input type='text' name='email' placeholder='Email' className='form-control m-3'/>   
              </div>
              <Link to='/forgot-password' className='forgot m-3'>Forgot password ?</Link>
              
             
              <div>
                <div className='d-flex justify-content-center align-items-center m-3'>
                 
                  <Link className='button border-0 m-3' to="/Profile" >Login</Link>
                  <Link className='button signup' to="/Signup" >SignUp</Link>
                

                </div>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}
