import { useContext } from "react"
import { informationContext } from "../contxt_api/MeraContext"


function MyDetails() {
  const { meraData } = useContext(informationContext)
  return (
    <div className="edu-card">
      <p className="college">Mera-Name:<mark>{meraData?.myname}</mark></p>
      <p className="degree">Age:<mark>{meraData?.age}</mark></p>
      <div className="edu-details">
        <span>Height: <mark>{meraData?.height}</mark></span>
        <span>Color:<mark>{meraData?.color}</mark></span>
      </div>
    </div>
  )
}

export default MyDetails