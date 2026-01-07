import { configureStore } from '@reduxjs/toolkit'
import MeraInfoReducer from '../slices/MeraInfoSlice'
import MeraFamilyInfoReducer from '../slices/MeraFamilyInfoSlice'
import MeriEducationReducer from '../slices/EducationInfoSlice'
export const store = configureStore({
    reducer: {
        meriInfo: MeraInfoReducer,
        merifamilyInfo: MeraFamilyInfoReducer,
        merieducation: MeriEducationReducer
    },
})
