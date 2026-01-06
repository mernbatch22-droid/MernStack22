import Child1 from "./components/Child1"
import Child2 from "./components/Child2"


function App(children) {

  // children 
  console.log("App component")
  return (
    <div>
      <h1>this is a root component</h1>
      <Child1>
        <Child2></Child2>
      </Child1>


    </div>
  )
}

export default App