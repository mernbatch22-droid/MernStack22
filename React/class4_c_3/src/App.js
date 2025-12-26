
import { useState } from 'react'
import One from './components/One'
import UserCard from './components/UserCard'

function App() {
  const [Data, setData] = useState();
  function setDataObject(info) {
    setData(info)
  }
console.log(Data)
  return (
    <div>
      <One setDataObject={setDataObject} />
      {
        Data ?(
          <div className="user-card">
            <div className="avatar"></div>
            <div className="name">Id: {Data?.id}</div>
            <div className="role">Name:{Data?.name}</div>
            <div className="role">Age:{Data?.age}</div>
            {/* <a href="#" className="button">View Profile</a> */}
          </div>
        ):"No Data Found"
      }
    </div>
  )
}

export default App