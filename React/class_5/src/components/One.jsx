import React, { useState } from 'react'

function One() {
    const [user1, setUser1] = useState("jagmohan")
    return (
        <div>One Component me User <mark>{user1}</mark>
            <button onClick={() => {
                setUser1("One ho gya")
            }}>change user3 </button></div>

    )
}

export default One