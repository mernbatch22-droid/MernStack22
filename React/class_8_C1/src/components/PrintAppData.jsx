import React, { useContext } from 'react'
import { tutiContext } from '..'
function PrintAppData() {

  // use the context
  const  {name}  = useContext(tutiContext)

  return (
    <div>this is a data which come from App
      <mark>{name}</mark>
    </div>
  )
}

export default PrintAppData