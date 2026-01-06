import React from 'react'
import { useContext } from 'react'
import { tutiContext } from '..'
function Child3() {
    const { age } = useContext(tutiContext)
    return (
        <>
            <p>this is in child3 component data come from app.js

                <b>{age}</b>

            </p>
            <div>Child3</div>

        </>
    )
}

export default Child3