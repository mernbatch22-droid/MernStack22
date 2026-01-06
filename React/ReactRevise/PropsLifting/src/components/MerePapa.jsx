import React from 'react'

function MerePapa({ hamrepassJameen, lutwaDeaya }) {


  return (
    <div>
      <h3>Ye rhe ham karam achhe the</h3>
      <h1>ye rhi bachi hui jameen {hamrepassJameen} </h1>
      <button onClick={() => lutwaDeaya("0.1Beegha")}>kheleGa by papa</button>
    </div>
  )
}

export default MerePapa