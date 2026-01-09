import {  useMemo, useState } from "react"


function App() {

  const [year, setYear] = useState(2026)
  const [n, setN] = useState(1000000000)
  // function heavyCalculation() {
  //   let sum = 0;
  //   for (let j = 1; j <= n; j++) {
  //     sum = sum + j
  //   }
  //   console.log("value of sum is", sum)
  //   return sum;
  // }
  // const OutPutOnUI = heavyCalculation();
  const OutPutOnUI = useMemo(() => {
    let sum = 0;
    for (let j = 1; j <= n; j++) {
      sum = sum + j
    }
    console.log("value of sum is", sum)
    return sum;

  }, [n])

  return (
    <div className="app">

      <p>Current Year: <b>{year}</b></p>
      <button onClick={() => setYear(year + 1)}> year</button>
      <button onClick={() => setN(n + 1)}> change n</button>
      <p>Sum of 1cr no is :{OutPutOnUI}</p>

    </div>
  )
}

export default App