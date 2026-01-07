
import { informationContext } from "../contxt_api/MeraContext"
import { useContext } from "react"
function MyParentDetails() {
  const { meraFamilyData } = useContext(informationContext)

  return (
    <div className="edu-card">
      <p className="college">Mother-Name:<mark>{meraFamilyData?.mother}</mark></p>
      <p className="degree">Father-Name:<mark>{meraFamilyData?.father}</mark></p>
      <div className="edu-details">
        <span>Badisister: <mark>{meraFamilyData?.badisister}</mark></span>
        <span>ChhotiSister:<mark>{meraFamilyData?.chhotiSister}</mark></span>

      </div>
    </div>
  )
}

export default MyParentDetails