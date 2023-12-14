import React from 'react'
import './Prod.css'
import './profilecard.css'
import {Link} from 'react-router-dom'
export default function Storproductpartie2({nom,categorie,price,image}) {
  return (
    <>
    

    <div className='container'>
    <div className='row'>
          <div className='categorie d-flex  flex-wrap justify-content-between aling-items-center justify-content-between align-items-center'>
            <div className="card d-flex  flex-wrap col-sm-6 col-md-6 m-3" > <Link to={`Details/${nom}/${categorie}/${price}/${encodeURIComponent(image)}`}>
              <img src={image} className="card-img-top img-fluids rounded-3 w-100 " alt="Placeholder Image"/></Link> 
             <div class="card-body">
             <h5 class="card-title">{nom}</h5>
             <h5 class="card-title">{categorie}</h5>
             <p class="card-text">{price}</p>
             <Link to="/Productdetails" className='btn btn-danger'>plus details</Link>
             
             


      
            </div>
           </div>
          
          
                    </div>
          </div>
    </div>
    </>
  )
}