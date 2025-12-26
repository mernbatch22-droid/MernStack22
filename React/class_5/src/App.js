import One from "./components/One.jsx"
import { useEffect, useState } from "react";
import Two from "./components/Two";
import Three from "./components/Three";

function App() {
  const [data, setUiData] = useState(1);
  const [one, setUiOne] = useState(10);
  function changeData() {
    setUiData(data + 1)

  }
  // 1st variety-> without dependency array
  //agar me useEffect hook ka use without dependency array ke karta hu to mera callback function jo use Effect ke andar likha us compoent ke 
  //har ek render me excute hoga.
  // useEffect(() => {
  //   console.log("hey I am Jagmohan ")
  // })


  // 2nd variety-> with dependency array which value is empty 
  // useEffect(() => {
  //   console.log("hey I am Jagmohan ")
  // },[])


  //3rd variety-> dependecny array has some values(states, variable);


  // useEffect(() => {
  //   console.log("hey I am Jagmohan ")
  // }, [data])


  // 4- cleaner component 
  useEffect(() => {
    // console.log("hey I am Jagmohan ")
    return (console.log("hey i will run when component is delete "))
  }, [data])

  return (
    <div>
      <h1>This is app component state data <mark>{data}</mark></h1>
      <h1>This is app component state === <mark>{one}</mark></h1>
      <button onClick={() => {
        changeData()
      }}>change data </button>

      <button onClick={() => setUiOne(one + 3)}>incre by 3 </button>

    </div>
  )
}

export default App