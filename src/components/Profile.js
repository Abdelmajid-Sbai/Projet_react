import React from 'react'
import { Form, Link } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import Prodprofilladd from './Prodprofilladd';
import { useState } from 'react';

import { useSelector } from 'react-redux'
import Prodprofile from './Prodprofile';


export default function Profile() {
  const prods=useSelector(state=> state.prods)
  

  
  const[product,setproduct]=useState('');

 



  

 
  
  
  return (
    <>
    <div className='container bg-dark mt-3'>
      <div className='row d-flex flex-wrap  aling-items-center  align-items-center'>
        <div className='col-lg-2 col-sm-12 m-2'><img src='images/pro.jpg'/></div>
        <div className='col-lg-3 col-sm-12  p-5'>  
        <Link className='button mb-3' to='/ModifierInfo'>Modifier Info</Link>
        <h1 className='text-white m-3 text-start'>Ali</h1>
        <h4  className='text-white '>Tanger</h4>
        </div>

        

        <div className='col-9  p-5'>  
        <Link className='button mb-3' to='/Addp'>Add Product</Link>
        <h3 className='text-white mt-3'></h3>
        
        
        
        </div>

        <div className='col-9  p-5'>  
        <h3 className='text-white mt-3'>My product</h3>
        
        <ul className='container d-flex flex-wrap  aling-items-center  align-items-center p-0'>
    
      {
prods.map((emp)=>{    

    return <li className='d-flex m-2   col-lg-4 col-md-6 col-sm-12'>
                <Prodprofile  nom={emp.nom}   categorie={emp.categorie} price={emp.price}  image={emp.image}   />
        
           </li> 
})

}   


      </ul>

        </div>
      </div>

    </div>
    </>
  )
}
