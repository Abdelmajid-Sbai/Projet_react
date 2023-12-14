import React from 'react'

export default function Productdetails() {
  return (
    <>
    <div className='min-product-wrapper py-5'>
      <h1 className='text-danger'>Tablet Samsung S7</h1>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'><img src='images/tab2.jpg' className='w-75'/>
          
          </div>

          <div className='col-6'>
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
