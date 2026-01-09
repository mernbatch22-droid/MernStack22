import {  useState } from "react"
import HomePage from "./components/HomePage"
import About from "./components/About"

function App() {
  console.log("app")
  const [year, setYear] = useState(2026)


  return (
    <div className="app">

      <p>Current Year: <b>{year}</b></p>
      <button onClick={() => setYear(year + 1)}>change year</button>
      <HomePage />
      <About value={{user:10}}/>
    </div>
  )
}

export default App