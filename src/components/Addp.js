import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Addp() {
    const[nomadd,setnom]=useState('');
    const[categorieadd,setcategorie]=useState('');
    const[priceadd,setprice]=useState('');
    const[imageadd,setimage]=useState('');

    

    const dispatch=useDispatch();


    const addP = () => {
        dispatch({
            type: "ADD",
            payload: {nom:nomadd,categorie:categorieadd,price:priceadd,image:imageadd}
        })
        setnom('');setcategorie('');setprice('');setimage('');   
    }
  return (
    <>
   <div className='container logi-wrapper py-5 '>
      <div className='row'>
        <div className=' col-12'>
        <h1>Add new Product : </h1>
          <div className=' auth-card'>
            
            <form action='' className='m-3'>
            <div>
            Nom product : <input type='text'  placeholder='Name product' value={nomadd} onChange={(e)=>setnom(e.target.value)} className='form-control m-3'/>   
              </div>
              <div>
              categorie :    <input type='text'  placeholder='categorie'  value={categorieadd} onChange={(e)=>setcategorie(e.target.value)}  className='form-control m-3'/>   
              </div>
              <div>
              price :   <input type='tel'  placeholder='price' value={priceadd} onChange={(e)=>setprice(e.target.value)} className='form-control m-3'/>   
              </div>
              <div>
              Image :   <input type='file'  placeholder='image' value={imageadd} onChange={(e)=>setimage(e.target.value)}  className='form-control m-3'/>   
              </div>
              
             
              
              <div>
                
                <div className='d-flex justify-content-center align-items-center m-3'>
                 
                <input type="button" value='Ajouter'  onClick={addP} className='button' /> 

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
