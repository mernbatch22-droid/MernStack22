import MyEducationDetails from "../components/MyEducationDetails.jsx"

function MyEducation({ meraEducationData, setMeraEducationData }) {
  return (
    <div>
      <MyEducationDetails
        meraEducationData={meraEducationData}
        setMeraEducationData={setMeraEducationData} />
    </div>
  )
}

export default MyEducation