import { useSelector } from "react-redux"



function MyDetails() {
  const { meraData } = useSelector((state) => state.meriInfo)



  return (
    <div className="edu-card">
      <h1>meri info</h1>
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