import React from 'react'
import MyParentDetails from '../components/MyParentDetails'

function MyParentInfo({meraFamilyData, setMeraFamilyData}) {
  return (
    <div>

        <MyParentDetails meraFamilyData={meraFamilyData} setMeraFamilyData={setMeraFamilyData}/>
    </div>
  )
}

export default MyParentInfo