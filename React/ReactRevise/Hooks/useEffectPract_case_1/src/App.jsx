import { useEffect, useState } from "react"


function App() {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  function manageHeightWidth() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  window.addEventListener("resize", manageHeightWidth)

  useEffect(()=>{
    console.log("me change ho rha hu")
  })

  return (
    <div>

      <p>This is the width of current screen: <b>{width}</b></p>
      <p>This is the height of current screen: <b>{height}</b></p>
    </div>
  )
}

export default App