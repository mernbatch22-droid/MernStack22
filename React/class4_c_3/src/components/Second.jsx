import React from 'react'
import UserCard from './UserCard'

function Second({ setDataObject }) {
     console.log("function kee body in second", setDataObject)
    return (
        <div>
            {/* <h1>Second</h1> */}
            <UserCard setDataObject={setDataObject} />
        </div>
    )
}

export default Second