import React, { useState } from 'react'
import Pardada from './components/Pardada'

function App() {
  // let hamrepassJameen="2000 Beegha"
  const [hamrepassJameen,setHamrepassJameen]=useState("2000 Beegha")
  return (
    <div>

      <h1 style={{backgroundColor:"red"}}>
        Mere Purvaj ke pass total jameen :{hamrepassJameen}
      </h1>
         <Pardada hamrepassJameen={hamrepassJameen} setHamrepassJameen={setHamrepassJameen}/>
    </div>
  )
}

export default App