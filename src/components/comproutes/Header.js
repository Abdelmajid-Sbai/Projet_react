import React from 'react'
import './nav.css'
import { NavLink,Link } from 'react-router-dom'
import {BsSearch, BsTypeH4} from 'react-icons/bs';


export default function Header() {
  return (
    <>
    <header className='header-top-strip py-2 mt-0'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='d-flex'>
                    <div className='col-6 text-center'><p className=' mb-0 mt-0 text-white'>Find what you want </p></div>
                    <div className='col-6 text-center'><p className=' mb-0 text-white'>Totale viseteures :2000 </p></div>
                </div>
            </div> 
        </div>
    </header>
    <header className='header-upper py-2'>
    <div className='container-xxl'>
            <div className='row '>
                    <div className='col-2 text-center '>
                      <h2>
                        <Link to="/" className='text-white'>Elctro.</Link> 
    
                      </h2>
                    </div>

                    <div className='col-3 '>
                    <div class="input-group mb-3">
                         <input type="text" className="form-control" placeholder="Search product here..." aria-label="Search product here..." aria-describedby="basic-addon2"/>
                         <span className="input-group-text" id="basic-addon2"><BsSearch/></span>
                    </div>
                    </div>

                    <div className='col-2 text-center '>
                      <h4 className=''>
                        <Link to="/Store" className='text-white'>Store</Link>  
                      </h4>
                    </div>

                    
                    <div className='col-2 text-center '>
                      <h4>
                        <Link to="/Login" className='text-white'>Login</Link>  
                      </h4>
                    </div>


                    
            </div>
          
        </div>
    </header>
    
    
    
    
    </>
  )
}
