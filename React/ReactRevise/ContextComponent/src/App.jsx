
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import MyInfo from "./pages/MyInfo.jsx"
import MyParentInfo from "./pages/MyParentInfo.jsx"
import MyEducation from "./pages/MyEducation.jsx"
import { createContext, useState } from "react"

// create a context 
export const informationContext = createContext();


function App() {


  // step-2 make your variable, state function which use in multiple component

  // my info
  const [meraData, setMeraData] = useState({
    myname: "Jagmohan Rai",
    age: 25,
    height: 5.55,
    color: "kariya",
    isMarried: false
  })

  // my family info
  const [meraFamilyData, setMeraFamilyData] = useState({
    mother: "Ms. Sheetal Rai",
    father: "Mr Ramratan Rai",
    badisister: "Ragini Rai",
    chhotiSister: "Anya Rai",

  })

  // myeduction info

  const [meraEducationData, setMeraEducationData] = useState({
    collageName: "Srgi",
    degree: "B.TECH /M.Tech",
    percentage: "9.76/ 8.23",
    location: "Jabalpur",
    state: "Madhya Pradesh"
  })

  const data = {
    meraData,
    meraFamilyData,
    meraEducationData
  }


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