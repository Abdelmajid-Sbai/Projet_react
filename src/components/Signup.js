import React from 'react'
import { Form, Link } from 'react-router-dom'
import './loginstyle.css'

export default function Signup() {
  return (
    <>
    <div className='container logi-wrapper py-5 '>
      <div className='row'>
        <div className=' col-12'>
          <div className=' auth-card'>
            <h3 className='text-center'>Sign Up</h3>
            <form action='' className='m-3'>
            <div>
                <input type='text' name='name' placeholder='Name' className='form-control m-3'/>   
              </div>
              <div>
                <input type='text' name='email' placeholder='Email' className='form-control m-3'/>   
              </div>
              <div>
                <input type='tel' name='mobile' placeholder='Mobile Number' className='form-control m-3'/>   
              </div>
              <div>
                <input type='password' name='password' placeholder='Password' className='form-control m-3'/>   
              </div>
              
             
              
              <div>
                
                <div className='d-flex justify-content-center align-items-center m-3'>
                  <Link className='button login m-2' to="/Login" >Login</Link>
                  <Link className='button signup' to="/Profile" >SignUp</Link>
                

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
