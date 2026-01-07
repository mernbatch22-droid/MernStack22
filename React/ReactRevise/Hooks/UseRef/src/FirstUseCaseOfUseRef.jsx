import { useEffect, useState, useRef } from "react"

function FirstUseCaseOfUseRef() {
  const [salary, setSalary] = useState(100000);
  let Normalbonus = 10011

  // i want persistance of value amoung the component rerenders
  let bonus = useRef(101);
  // console.log(bonus.current)
  function increaseSalaryByBonus() {
    setSalary(salary + 101)
    bonus.current = bonus.current + 101
    Normalbonus=Normalbonus+11000
    // console.log("in fun",bonus)
  }



  useEffect(() => {
    console.log("current bonus is", bonus.current)
    console.log("normal variable bonus",Normalbonus)
  })
  return (
    <div>

      <h1>UseRef Hook </h1>
      <h2>Current salary is :{salary}</h2>
      <button onClick={increaseSalaryByBonus}>increase salary</button>
    </div>)
}
export default FirstUseCaseOfUseRef