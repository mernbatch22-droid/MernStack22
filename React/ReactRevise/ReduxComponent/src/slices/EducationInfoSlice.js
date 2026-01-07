import { createSlice } from '@reduxjs/toolkit'
export const EducationInfoSlice = createSlice({
    name: 'merieducation',
    initialState: {
        meraEducationData: {
            collageName: "Srgi",
            degree: "B.TECH /M.Tech",
            percentage: "9.76/ 8.23",
            location: "Jabalpur",
            state: "Madhya Pradesh"
        }
    }
})



export default EducationInfoSlice.reducer