
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import MyInfo from "./pages/MyInfo.jsx"
import MyParentInfo from "./pages/MyParentInfo.jsx"
import MyEducation from "./pages/MyEducation.jsx"
import MeraContext from "./contxt_api/MeraContext.jsx"




function App() {
  let { informationContext, data } = MeraContext()
 



  return (
    <div>

      {/*  provide your context */}
      <Navbar />
      <informationContext.Provider value={data}>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myinfo" element={<MyInfo />} />
          <Route path="/myfamily-info" element={<MyParentInfo />} />
          <Route path="/myeducation-info" element={<MyEducation />} />
          <Route path="" element={<h1>Not Found page</h1>} />
        </Routes>
      </informationContext.Provider>


    </div>
  )
}

export default App