
// function HomePage() {
//     console.log("Home page")
//     return (
//         <div>
//             <p>Name:<b>Mohan Rai</b></p>
//             <p>Age:<b>25</b></p>
//             <p>City:<b>Jabalpur</b></p>

import React from "react"

//         </div>
//     )
// }

// export default HomePage



const HomePage = React.memo(() => {

    console.log("Home page")
    return (
        <div>
            <p>Name:<b>Mohan Rai</b></p>
            <p>Age:<b>25</b></p>
            <p>City:<b>Jabalpur</b></p>

        </div>
    )

})

export default HomePage