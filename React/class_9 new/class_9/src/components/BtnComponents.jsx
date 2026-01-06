import React from 'react'
import "../pages/Home.css"
function BtnComponents({i,setCurrPage}) {
    console.log("i value is ",i)
    return (
        <button className='pag'
            onClick={() => {
                setCurrPage(i)
            }}
        >{i}</button>
    )
}

export default BtnComponents