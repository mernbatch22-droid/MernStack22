import { createContext, useState } from "react"

// create a context 
export const informationContext = createContext();
function MeraContext() {
    // step-2 make your variable, state function which use in multiple component

    // my info
    const [meraData, setMeraData] = useState({
        myname: "Jagmohan Rai",
        age: 25,
        height: 5.55,
        color: "kariya",
        isMarried: false
    })

    // my family info
    const [meraFamilyData, setMeraFamilyData] = useState({
        mother: "Ms. Sheetal Rai",
        father: "Mr Ramratan Rai",
        badisister: "Ragini Rai",
        chhotiSister: "Anya Rai",

    })

    // myeduction info

    const [meraEducationData, setMeraEducationData] = useState({
        collageName: "Srgi",
        degree: "B.TECH /M.Tech",
        percentage: "9.76/ 8.23",
        location: "Jabalpur",
        state: "Madhya Pradesh"
    })

    const data = {
        meraData,
        meraFamilyData,
        meraEducationData
    }
    return { informationContext,data }

}

export default MeraContext