import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx"
import NotFound from "./pages/NotFound.jsx"
import { useEffect, useState } from 'react'

function App() {

  const [cardNo,setCardNo]=useState(1)
  const [apiData, setApiData] = useState();
  const [loader, setLoader] = useState(true)


  async function makeApiCall(url) {
    const response = await fetch(url);
    const answer = await response.json();
    // console.log("api ka data", answer)
    setLoader(false);
    setApiData(answer)
    console.log(url)

  }
  useEffect(() => {
    makeApiCall(`https://fakestoreapi.com/products/${cardNo}`)
  }, [cardNo])

  // console.log(apiData)
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home data={apiData} loader={loader}  setCardNo={setCardNo} cardNo={cardNo}/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>


    </div>
  )
}

export default App