
import Child1 from './components/Child1'
import PrintAppData from './components/PrintAppData'

function App() {
  const name="Jagmohan"
  return (
    <div>

      <PrintAppData One={name}/>
      <Child1  tt={name}/>
    </div>
  )
}

export default App