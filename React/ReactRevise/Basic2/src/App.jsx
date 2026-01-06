
import { useState } from "react"
import Child1 from "./components/Child1.jsx"
import Child2 from "./components/Child2.jsx"
function App() {
  // let name1 = "Dhurandar"

  // function changeMovie(){
  //   console.log(name1)
  //   name1="Balle Balle"
  //   console.log("click hua",name1)
  // }


  const [name1, setName1] = useState("Dhurandar")
  let age = 90
  function changeMovie() {
    console.log(name1)
    setName1("Balle Balle")
    console.log("click hua", name1)
  }

  const dt = { cId: 101, cName: "SRGI" }
  let arr=[10,20,30]
  console.log(name1)
  return (
    <>
      {/* <div>this is app component</div>
      <p>this is the state of app componnent :<b>{name1}</b></p>
      <button onClick={() => changeMovie()}>change Movie</button> */}
      <Child1 age={age} />
      <Child2 info={arr} />

    </>
  )
}

export default App