import { useContext } from "react"
import { informationContext } from "../contxt_api/MeraContext"
function MyEducationDetails() {
  const {meraEducationData}=useContext(informationContext)
  return (
    <div className="edu-card">
      <p className="college">CollageName:<mark>{meraEducationData?.collageName}</mark></p>
      <p className="degree">Degree:<mark>{meraEducationData?.degree}</mark></p>
      <div className="edu-details">
        <span>Percentage: <mark>{meraEducationData?.percentage}</mark></span>
        <span>Location:<mark>{meraEducationData?.location}</mark></span>
        <span>State:<mark>{meraEducationData?.state}</mark></span>
      </div>
    </div>
  )
}

export default MyEducationDetails