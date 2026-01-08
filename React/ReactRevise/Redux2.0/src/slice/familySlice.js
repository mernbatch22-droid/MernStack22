import { createSlice } from "@reduxjs/toolkit";
const familySlice = createSlice({
    name: "family",
    initialState: {
        mother: "Ms Rama",
        father: "Mr Lakshman",
        neighbour_Country: "Pakistan",
    },
    reducers: {
        changeInfo: (state, actions) => {
           console.log(actions.payload)
            state.mother = actions.payload.motherName;
            state.father = actions.payload.fatherName
            state.neighbour_Country = actions.payload.cityName
        },

        bestVersion:
        {
            prepare: (motherName, fatherName, cityName) => {
                return { payload: { motherName, fatherName, cityName } }
            },
            reducer: (state, action) => {
                console.log(action)
                state.mother = action.payload.motherName;
                state.father = action.payload.fatherName
                state.neighbour_Country = action.payload.cityName
            }
        }
    }
})
export const { changeInfo ,bestVersion} = familySlice.actions;
export default familySlice.reducer;