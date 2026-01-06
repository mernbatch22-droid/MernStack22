import React, { useState } from 'react'
import Child2 from './Child2'

function Child1() {

    return (
        <div>
            Child1
            <Child2 />
            <p>this data come from the child3

            </p>
        </div>
    )
}

export default Child1