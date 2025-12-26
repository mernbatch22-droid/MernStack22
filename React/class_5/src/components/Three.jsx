
import React, { useState } from 'react'

function Three() {
    const [user3, setUser3] = useState("Vinay")
    return (
        <div>Three Component me User <mark>{user3}</mark>
        <button onClick={()=>{
            setUser3("Three ho gya")
        }}>change user3 </button></div>
    )
}

export default Three