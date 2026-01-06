
import Child1 from './components/Child1'
import PrintAppData from './components/PrintAppData'
import { useContext } from 'react'
function App() {

  return (
    <div>

      <PrintAppData />
      <Child1 />
    </div>
  )
}

export default App