import React from 'react'
import { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import './homestyle.css'
import Task from './Task'

import './todostyle.css';

export default function Home() {
    const [categories,setcategoies]=useState([
        {nom:'Ordinateurs',img:'images/pc.jfif'},{nom:'Tablets',img:'images/tab2.jpg'},{nom:'tv',img:'images/tv.jpg'}
    ])

    const [Tablet,settables]=useState([
        {nom:'tablet',img:'images/tab3.jpg'},{nom:'Tablet',img:'images/tab2.jpg'},{nom:'tablet',img:'images/tab3.jpg'}
    ])

    const [laptop,setlaptop]=useState([
        {nom:'Ordinateurs',img:'images/pc.jfif'},{nom:'Ordinateurs',img:'images/pc1.jfif'},{nom:'Ordinateurs',img:'images/pc.jfif'}
    ])

    const [tv,settv]=useState([
        {nom:'TV',img:'images/tv.jpg'},{nom:'Tv',img:'images/tv.jpg'},{nom:'tv',img:'images/tv.jpg'}
    ])
    const[categorie,setcategorie]=useState('');


    
      const deletecategorie=(idp)=>{
        let newcategories=categories.filter((t)=>{
            return t.id!=idp
        })
       setcategoies(newcategories);
      }

  return (
    <>
    <section className='container home-wrapper-1 py-5 d-flex flex-wrap'>
        <div className='container-xxl d-flex flex-wrap'>
            <div className='row d-flex flex-wrap'>

                <div className='col-sm-12 col-md-6'>
                    <div className='main-banner position-relative p-3 '>
                        <img src='images/tab3.jpg' className='img-fluid rounded-3  '/>
                        
                        <div className='main-banner-content position-absolute'>
                            <h4>best puduct now</h4>
                            <h5>pruduct nom</h5>
                            <p> $100.00</p>
                            <Link className='button'>BUY NOW</Link>
                        </div>

                    </div>
                </div>

                <div className='col-sm-12 col-md-6'>
                    <div className='d-flex flex-wrap justify-content-between aling-items-center'>
                    <div className='small-banner position-relative p-3 col-sm-12 col-md-6 '>
                        <img src='images/tab2.jpg' className='img-fluids rounded-3'/>
                        
                        <div className='small-banner-content position-absolute'>
                            <h4>best puduct now</h4>
                            <h5>pruduct nom</h5>
                            <p> $100.00</p>
                            <Link className='button'>BUY NOW</Link>
                        </div>

                    </div>
                    <div className='small-banner position-relative p-3 col-sm-12 col-md-6 '>
                        <img src='images/tv.jpg' className='img-fluids rounded-3 w-100 '/>
                        
                        <div className='small-banner-content position-absolute'>
                            <h4>best puduct now</h4>
                            <h5>pruduct nom</h5>
                            <p> $100.00</p>
                            <Link className='button'>BUY NOW</Link>
                        </div>

                    </div>
                    <div className='small-banner position-relative p-3 col-sm-12 col-md-6 '>
                        <img src='images/pc.jfif' className='img-fluids rounded-3  '/>
                        
                        <div className='small-banner-content position-absolute'>
                            <h4>best puduct now</h4>
                            <h5>pruduct nom</h5>
                            <p> $100.00</p>
                            <Link className='button'>BUY NOW</Link>
                        </div>

                    </div>
                    <div className='small-banner position-relative p-3 col-sm-12 col-md-6 '>
                        <img src='images/tab3.jpg' className='img-fluids rounded-3 '/>
                        
                        <div className='small-banner-content position-absolute'>
                            <h4>best puduct now</h4>
                            <h5>pruduct nom</h5>
                            <p> $100.00</p>
                            <Link className='button'>BUY NOW</Link>
                        </div>

                    </div>
                    </div>
                </div>
            </div>

        </div>

    </section>

    <section className='container home-wrapper-2 py-5'>
        <div className='container-xxl'> 
        <div className='row'>
            <div className='col-12'>
                <div className=' services d-flex flex-wrap align-items-center justify-content-between'>
                    <div className='d-flex col-sm-12 col-md-3 align-items-center'>
                        <img src='images/service.png'/>
                        <div className=' p-1'>
                            <h6>Free Shipping</h6>
                            <p className='mb-0'>From all orders over 100$</p>
                        </div>
                    </div>
                    <div className='d-flex col-sm-12 col-md-3 align-items-center'>
                    <img src='images/service-02.png'/>
                        <div className=' p-1'>
                            <h6>Daily Surprise Offers</h6>
                            <p className='mb-0'>Save upto 25% off</p>
                        </div>
                    </div>
                    <div className='d-flex col-sm-12 col-md-3 align-items-center'>
                    <img src='images/service-03.png'/>
                        <div className=' p-1'>
                            <h6>Support 24/7</h6>
                            <p className='mb-0'>Shop with an expert</p>
                        </div>
                    </div>
                    <div className='d-flex col-sm-12 col-md-3 align-items-center'>
                    <img src='images/service-05.png'/>
                        <div className=' p-1'>
                            <h6>Secure Payments</h6>
                            <p className='mb-0'>100% Protected Payment</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>

        </div>

    </section>

    <section className='container home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                <h3 className='m-3'>Our Categories</h3>
                    <div className='categorie m-3 d-flex justify-content-between align-items-center'>
                        
                    {
            categories.map((t)=>{
                return <div className='align-items-center m-2' key={t.id}><Task  delf={()=>deletecategorie(t.id)}  txt={t.nom}/><img src={t.img} className='img-fluids rounded-3 w-100 '/></div>
            })
          }
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6 '>
                    <img src='images/pc1.jfif' className='col-6 w-100 m-5'/>
                </div>
                <div className='col-6'>
                    <h1>Best Electoniques For You</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.






</p>
                </div>
            </div>
        </div>

    </section>

    <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Tablets</h1>
                    <div className='categorie m-3 d-flex justify-content-between align-items-center'>
                    {
            Tablet.map((t)=>{
                return <div className='align-items-center m-3' key={t.id}><Task  delf={()=>deletecategorie(t.id)}  txt={t.nom}/><img src={t.img} className='img-fluids rounded-3 w-100 '/></div>
            })
          }
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Laptop</h1>
                    <div className='categorie m-3 d-flex justify-content-between align-items-center'>
                    {
            laptop.map((t)=>{
                return <div className='align-items-center m-3' key={t.id}><Task  delf={()=>deletecategorie(t.id)}  txt={t.nom}/><img src={t.img} className='img-fluids rounded-3 w-100 '/></div>
            })
          }
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <h1>TV</h1>
                    <div className='categorie m-3 d-flex justify-content-between align-items-center'>
                    {
            tv.map((t)=>{
                return <div className='align-items-center m-3' key={t.id}><Task  delf={()=>deletecategorie(t.id)}  txt={t.nom}/><img src={t.img} className='img-fluids rounded-3 w-100 '/></div>
            })
          }
                    </div>
                </div>
            </div>
        </div>

    </section>

    
    </>
  )
}
