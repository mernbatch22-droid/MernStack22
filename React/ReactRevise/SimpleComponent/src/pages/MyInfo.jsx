import React from 'react'
import MyDetails from '../components/MyDetails'

function MyInfo({meraData,setMeraData}) {
    return (
        <div>
            <MyDetails meraData={meraData} setMeraData={setMeraData} />
        </div>
    )
}

export default MyInfo