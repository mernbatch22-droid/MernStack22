import React from 'react'

function Child3({ getTheData, tuti }) {

    const age = 90;
    return (
        <>
            <p>this is in child3 component data come from app.js <b>{tuti}</b></p>
            <div>Child3</div>
            <button onClick={() => getTheData(age)}>send Data</button>
        </>
    )
}

export default Child3