import React from 'react'
import { useParams } from 'react-router-dom';

export default function Productdetails() {
  const {nom,categorie,price,image}=useParams();
  return (
    <>
    

    <div className='min-product-wrapper py-5'>
      
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
          <div className='col-12 p-0 m-0'><img src={process.env.PUBLIC_URL+`/imagee/tab3.jpg`} className='w-75'/>
          
          </div>
          
          </div>

          <div className='col-6'>
          <h1 className='text-danger'>Tablet Samsung S7</h1>
             <p className='bg-white p-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <h2 className='m-3 text-danger'>$100</h2>
              <h2 className='m-3 text-blue'>Color : bleu or Black</h2>
              <input type='button' value='add panier' className='button m-5'/>
          </div>



          
        </div>
      </div>
    </div>
    

    

    <section className='reviews py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>

          </div>
        </div>
      </div>

    </section>
    </>
  )
}
