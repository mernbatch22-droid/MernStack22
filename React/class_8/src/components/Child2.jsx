import React from 'react'
import Child3 from './Child3'

function Child2({getTheData,foti}) {
    return (
        <div>
            <span>Child2</span>
            <Child3 getTheData={getTheData} tuti={foti} />

        </div>
    )
}

export default Child2