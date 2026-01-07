import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Page1 from "./components/Page1.jsx"
import Page2 from "./components/Page2.jsx"
import Page3 from "./components/Page3.jsx"

function App() {
  return (
    <div>


      <Navbar />
      <Routes>

        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App