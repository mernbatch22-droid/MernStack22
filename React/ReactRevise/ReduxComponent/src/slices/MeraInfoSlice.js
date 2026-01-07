import { createSlice } from '@reduxjs/toolkit'

export const MeraInfoSlice = createSlice({
    name: 'meriInfo',
    initialState: {
        meraData: {
            myname: "Jagmohan Rai",
            age: 25,
            height: 5.55,
            color: "kariya",
            isMarried: false
        }
    },


})




export default MeraInfoSlice.reducer