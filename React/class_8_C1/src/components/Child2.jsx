import React from 'react'
import Child3 from './Child3'

import { useContext } from 'react'
import { tutiContext } from '..'

function Child2() {
    const { sum } = useContext(tutiContext);
   let ans= sum(10, 20)
   console.log(ans)
    return (
        <div>
            <span>Child2</span>
            <Child3 />

        </div>
    )
}

export default Child2