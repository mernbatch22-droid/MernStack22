import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeInfo } from '../slice/familySlice'
import { bestVersion } from '../slice/familySlice'
function FamilyData() {

    const { mother, father, neighbour_Country } = useSelector((state) => state.family)
    const dispatch = useDispatch()
    return (
        <div className="family-container">
            <h2 className="family-title">This is information of Family</h2>

            <p><strong>Mother:</strong> {mother}</p>
            <p><strong>Father:</strong> {father}</p>
            <p><strong>Neighbour Country:</strong> {neighbour_Country}</p>
            <br />
            {/* wrong way */}
            {/* <button onClick={() => {
                dispatch(changeInfo("SiyaRani","Lallan","Mirjapur"))
            }}>1st way</button><br /><br /> */}

            {/* correct way */}
            <button onClick={() => {
                dispatch(changeInfo({ motherName: "SiyaRani", fatherName: "Lallan", cityName: "Mirjapur" }))
            }}>1st way</button><br /><br />



            {/*  upar galt vale ko shi karunga  */}
            <button onClick={() => {
                dispatch(bestVersion("SiyaRani", "Lallan", "Mirjapur"))
            }}>best way</button><br /><br />
        </div>

    )
}

export default FamilyData