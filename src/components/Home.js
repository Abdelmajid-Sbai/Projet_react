import React from 'react'
import { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import './homestyle.css'
import Task from './Task'
import tab3 from './img/tab3.jpg'
import tab2 from './img/tab2.jpg'
import tv1 from './img/tv.jpg'
import pc from './img/pc.jfif'
import pc1 from './img/pc1.jfif'
import service from './img/service.png'
import service2 from './img/service2.png'
import service3 from './img/service3.png'
import service4 from './img/service4.png'


import './todostyle.css';

export default function Home() {
    const [categories,setcategoies]=useState([
        {nom:'Ordinateurs',img:process.env.PUBLIC_URL+`/imagee/pc.jfif`},{nom:'Tablets',img:process.env.PUBLIC_URL+`/imagee/tab2.jpg`},{nom:'tv',img:process.env.PUBLIC_URL+`/imagee/tv.jpg`}
    ])

    const [Tablet,settables]=useState([
        {nom:'tablet',img:process.env.PUBLIC_URL+`/imagee/tab3.jpg`},{nom:'Tablet',img:process.env.PUBLIC_URL+`/imagee/tab2.jpg`},{nom:'tablet',img:process.env.PUBLIC_URL+`/imagee/tab3.jpg`}
    ])

    const [laptop,setlaptop]=useState([
        {nom:'Ordinateurs',img:process.env.PUBLIC_URL+`/imagee/pc.jfif`},{nom:'Ordinateurs',img:process.env.PUBLIC_URL+`/imagee/pc1.jfif`},{nom:'Ordinateurs',img:process.env.PUBLIC_URL+`/imagee/pc.jfif`}
    ])

    const [tv,settv]=useState([
        {nom:'TV',img:process.env.PUBLIC_URL+`/imagee/tv.jpg`},{nom:'Tv',img:process.env.PUBLIC_URL+`/imagee/tv.jpg`},{nom:'tv',img:process.env.PUBLIC_URL+`/imagee/tv.jpg`}
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
                    <img src={process.env.PUBLIC_URL+`/imagee/tab3.jpg`} className='img-fluid rounded-3 require ' alt="" />
                        
                        
                        <div className='main-banner-content position-absolute'>
                            <h4>best product now</h4>
                            <h5>Samsung Tab S7</h5>
                            <p> $100.00</p>
                            <Link className='button'>BUY NOW</Link>
                        </div>

                    </div>
                </div>

                <div className='col-sm-12 col-md-6'>
                    <div className='d-flex flex-wrap justify-content-between aling-items-center'>
                    <div className='small-banner position-relative p-3 col-sm-12 col-md-6 '>
                        <img src={tab2} className='img-fluids rounded-3'/>
                        
                        <div className='small-banner-content position-absolute'>
                           
                            <Link className='button'>BUY NOW</Link>
                        </div>

                    </div>
                    <div className='small-banner position-relative p-3 col-sm-12 col-md-6 '>
                        <img src={tv1} className='img-fluids rounded-3 w-100 '/>
                        
                        <div className='small-banner-content position-absolute'>
                           
                            <Link className='button'>BUY NOW</Link>
                        </div>

                    </div>
                    <div className='small-banner position-relative p-3 col-sm-12 col-md-6 '>
                        <img src={pc} className='img-fluids rounded-3  '/>
                        
                        <div className='small-banner-content position-absolute'>
                           
                            <Link className='button'>BUY NOW</Link>
                        </div>

                    </div>
                    <div className='small-banner position-relative p-3 col-sm-12 col-md-6 '>
                        <img src={tab3} className='img-fluids rounded-3 '/>
                        
                        <div className='small-banner-content position-absolute'>
                            
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
                        <img src={service}/>
                        <div className=' p-1'>
                            <h6>Free Shipping</h6>
                            <p className='mb-0'>From all orders over 100$</p>
                        </div>
                    </div>
                    <div className='d-flex col-sm-12 col-md-3 align-items-center'>
                    <img src={service2}/>
                        <div className=' p-1'>
                            <h6>Daily Surprise Offers</h6>
                            <p className='mb-0'>Save upto 25% off</p>
                        </div>
                    </div>
                    <div className='d-flex col-sm-12 col-md-3 align-items-center'>
                    <img src={service3}/>
                        <div className=' p-1'>
                            <h6>Support 24/7</h6>
                            <p className='mb-0'>Shop with an expert</p>
                        </div>
                    </div>
                    <div className='d-flex col-sm-12 col-md-3 align-items-center'>
                    <img src={service4}/>
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
                    <img src={process.env.PUBLIC_URL+`/imagee/pc.jfif`} className='col-6 w-100 m-5'/>
                </div>
                <div className='col-4'>
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
