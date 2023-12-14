import React from 'react'

export default function storeprod({txt,delf,edit}) {
  return (
    <div>
        <input type='text' className='inputastyle ' readOnly value={txt} /> 
    </div>
  )
}
