

import React from "react"

const About = React.memo(({value}) => {

    console.log("About page")
    return (
        <div>
            <p>This is about page: {value.id}</p>
        </div>
    )

})



export default About
