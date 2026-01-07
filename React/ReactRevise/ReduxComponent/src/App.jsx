
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import MyInfo from "./pages/MyInfo.jsx"
import MyParentInfo from "./pages/MyParentInfo.jsx"
import MyEducation from "./pages/MyEducation.jsx"





function App() {





  return (
    <div>

      {/*  provide your context */}
      <Navbar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/myfamily-info" element={<MyParentInfo />} />
         <Route path="/myeducation-info" element={<MyEducation />} />
        <Route path="" element={<h1>Not Found page</h1>} />
      </Routes>



    </div>
  )
}

export default App