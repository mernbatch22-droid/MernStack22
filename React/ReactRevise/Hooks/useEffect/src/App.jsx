import { useEffect, useState } from "react"


function App() {


  const userName = "Mohan"
  const [count, setCount] = useState(1)
  const [age, setAge] = useState(25)
  const [id, setId] = useState(25)

  //1st case without dependency array excute on every render
  useEffect(() => {
    alert("Coding seekh rhe hai")
  })
  


  // 2nd case with empty dependency array - runs only 1st render
  // useEffect(() => {
  //   alert("Coding seekh rhe hai")
  // }, [])


  //3rd case dependency array has some parameters( run on 1st reder and dependency arrya parameter change value ke sath)
  // useEffect(() => {
  //   alert("Coding seekh rhe hai")
  // }, [count,age])
  return (
    <div>

      <p>Name of User is <b>{userName}</b></p>
      <p>Age is :<b>{age}</b></p>
      <p>count: :<b>{count}</b></p>
      <p>id is :<b>{id}</b></p>
      <button onClick={() => setCount(count + 1)}>change count</button>
      <button onClick={() => setAge(29)}>change Age</button>
      <button onClick={() => setId(29)}>change Id</button>
    </div>
  )
}

export default App