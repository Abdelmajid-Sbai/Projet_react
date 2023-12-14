import React from 'react'
import { useState } from 'react'
import Task from './storeprod'
import { NavLink,Link } from 'react-router-dom'
import Prodprofile from './Prodprofile';
import Storproductpartie2 from './Storproductpartie2';
import { v4 as uuidv4 } from "uuid";
import Prodprofilladd from './Prodprofilladd';


import { useSelector } from 'react-redux'

import './store.css'


export default function Store() {
  const [products,setproducts]=useState([
    {nom:'prod1',img:'images/tab3.jpg',price:'$100'},
    {nom:'prod2',img:'images/tab2.jpg',price:'$100'},
    {nom:'prod3',img:'images/pc.jfif',price:'$100'},
    {nom:'prod1',img:'images/tv.jpg',price:'$100'},
    {nom:'prod1',img:'images/tab3.jpg',price:'$100'},
    {nom:'prod1',img:'images/tab2.jpg',price:'$100'},
    {nom:'prod1',img:'images/pc1.jfif',price:'$100'},
    {nom:'prod1',img:'images/tab3.jpg',price:'$100'},
    {nom:'prod1',img:'images/tv.jpg',price:'$100'},
    {nom:'prod1',img:'images/tab2.jpg',price:'$100'},
    {nom:'prod1',img:'images/tab3.jpg',price:'$100'}
])
const[categories,setcategories]=useState([
  {nom:'Ordinature'},
  {nom:'Tv'},
  {nom:'Tablets'},
  {nom:'Smartphone'}
]);




const prods=useSelector(state=> state.prods)



/*const addtask=()=>{
    let newtasks=[...tasks];
    let newtask={};

    newtask.id=uuidv4();
    newtask.nom=task;

    newtasks.push(newtask);

    settasks(newtasks);
    settask('');

  }*/

  const deletecategorie=(idp)=>{
    let newcategories=products.filter((t)=>{
        return t.id!=idp
    })
   setproducts(newcategories);
  }
  return (
    <>
    <div className='store py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By Categorie</h3>
              <ul className='m-2'>
          {
            categories.map((t)=>{
                return <li key={t.id} className='m-2'>{t.nom}</li>
            })
          }
        </ul>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter By</h3>
              <div>
                <h5 className='sub-title'>Avialablity</h5>
                <div className='form-chek'>
                  <input className='form-chek-input' type='checkbox' value=''/> <label className='form-chek-label'>In Stock (1)</label>

                </div>
                <div className='form-chek'>
                  <input className='form-chek-input' type='checkbox' value='' /> <label className='form-chek-label'>Out of Stock (0)</label>

                </div>
              </div>
            </div>
           

          </div>

          <div className='col-9 '>
         





          <div className='cards d-flex flex-wrap justify-content-between aling-items-center justify-content-between align-items-center'>
                    {
            products.map((t)=>{
                return <div className="card d-flex  col-sm-3 col-md-3 m-2" >
    <img src={t.img} className="card-img-top img-fluids rounded-3 w-100 " alt="Placeholder Image"/>
    <div class="card-body">
      <h5 class="card-title">{t.nom}</h5>
      <p class="card-text">{t.price}</p>
      <Link to="/Productdetails" className='btn btn-danger'>plus details</Link>
    </div>
  </div>
            })
          }

<ul className='cards d-flex flex-wrap justify-content-between aling-items-center justify-content-between align-items-center p-0'>
    
    {
prods.map((p)=>{    

  return <li className='d-flex'>
              <Storproductpartie2  nom={p.nom}  categorie={p.categorie} price={p.price}  image={p.image}   />
      
         </li> 
})

}   


    </ul>
                    </div>
          </div>
        </div>
      </div>

    </div>
    

  
    </>
    
  )
}
