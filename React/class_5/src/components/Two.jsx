
import React, { useState } from 'react'
function Two() {
    const [user2, setUser2] = useState("Mohan")
    return (
        <div>
            Two Component me User <mark>{user2}</mark>
            <button onClick={() => {
                setUser2("Two ho gya")
            }}>change user3 </button>
        </div>
    )
}

export default Two