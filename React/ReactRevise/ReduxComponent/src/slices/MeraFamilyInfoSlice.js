import { createSlice } from '@reduxjs/toolkit'

export const MeraFamilyInfoSlice = createSlice({
    name: 'merifamilyInfo',
    initialState: {
        meraFamilyData: {
            mother: "Ms. Sheetal Rai",
            father: "Mr Ramratan Rai",
            badisister: "Ragini Rai",
            chhotiSister: "Anya Rai",
        }

    }
})
export default MeraFamilyInfoSlice.reducer