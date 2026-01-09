import { useCallback, useEffect, useState } from "react"


function App() {
  const [age, setAge] = useState(25);
  const [no, setNo] = useState(10);

  // function printTheValue() {
  //   console.log("the current age is ", age)
  // }


  const printTheValue = useCallback(() => {
    console.log("the current age is ", age)
  }, [no])
  useEffect(() => {
    printTheValue()
  })
  return (
    <div>
      <p>The current age of human is {age}</p>
      <button onClick={() => setAge(age + 4)}>change age</button>
      <p>The current no is {no}</p>
      <button onClick={() => setNo(no + 100)}>change No</button>
    </div>
  )
}

export default App