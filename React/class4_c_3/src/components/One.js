import React from 'react'
import Second from './Second'

function One({ setDataObject }) {

  console.log("function kee body in one", setDataObject)
  return (
    < div >
      {/* <h1>One</h1> */}
      <Second setDataObject={setDataObject} />
    </div >
  )
}

export default One;