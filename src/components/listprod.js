import React from 'react'
import { useSelector } from 'react-redux'
import Prodprofile from './components/Prodprofile'

export default function listprod() {
    
const prods=useSelector(state=> state.prods)
  return (
    <div>
        <h2>Liste des produit:</h2>
      <ul>
    
      {
prods.map((emp)=>{    

    return <li>
                <Prodprofile  nom={emp.nom}  categorie={emp.prenom} price={emp.fonction}  image={emp.image}   />
        
           </li> 
})

}        
      </ul>
    </div>
  )
}