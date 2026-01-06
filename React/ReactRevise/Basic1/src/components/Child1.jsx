import React from 'react'

function Child1(children) {
    console.log(children)
  return (
    <div>Child1

        {children}
    </div>
  )
}

export default Child1