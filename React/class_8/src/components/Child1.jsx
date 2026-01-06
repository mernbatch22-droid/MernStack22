import React, { useState } from 'react'
import Child2 from './Child2'

function Child1({tt}) {
    const [d, setD] = useState()
    function getTheData(data) {
        setD(data)
    }
    return (
        <div>
            Child1
            <Child2 getTheData={getTheData}  foti={tt}/>
            <p>this data come from the child3 <del>{d}</del></p>
        </div>
    )
}

export default Child1