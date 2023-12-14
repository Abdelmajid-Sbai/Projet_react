import React from 'react'

export default function Prodprofilladd({txt,tcat,ttel,timage,deleteproduct,edit}) {
  return (
    <div>
        <input type='text' className='inputastyle' readOnly value={txt}/>
        <input type='text' className='inputastyle' readOnly value={tcat}/>
        <input type='text' className='inputastyle' readOnly value={ttel}/>
        <input type='text' className='inputastyle' readOnly value={timage}/>
         <input type='button' className='inputsstyle' onClick={deleteproduct}  value='remove'/>
    </div>
  )
}
