import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About.jsx"
import Contacts from "./pages/Contacts.jsx"
import Services from "./pages/Services.jsx"
import Home from "./pages/Home.jsx"
function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/servies" element={<Services />}></Route>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<div>Page not found</div>} />

      </Routes>
    </div>
  )
}

export default App