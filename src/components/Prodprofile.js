import React from 'react'
import './Prod.css'
import './profilecard.css'
import {Link} from 'react-router-dom'
export default function prodprofile({nom,delf,categorie,price,image}) {
  return (
    <>
    

    <div className='container'>
    <div className='row'>
          <div className='categorie  d-flex  flex-wrap justify-content-between aling-items-center justify-content-between align-items-center'>
            <div className="card d-flex  flex-wrap col-sm-4 col-md-3 " > <Link to={`/Productdetails`}>
              <img src={image} className="card-img-top img-fluids rounded-3 " alt="Placeholder Image"/></Link> 
             <div class="card-body">
             <h5 class="card-title">{nom}</h5>
             <h5 class="card-title">{categorie}</h5>
             <p class="card-text">{price}</p>
             <input type='button' className='button' onClick={delf}  value='remove'/>
             


      
            </div>
           </div>
          
          
                    </div>
          </div>
    </div>
    </>
  )
}