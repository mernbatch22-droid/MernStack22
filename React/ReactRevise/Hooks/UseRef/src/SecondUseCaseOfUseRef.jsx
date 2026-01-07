
import "./SecondUseCaseOfUseRef.css";
import { useRef, useState } from "react";
function SecondUseCaseOfUseRef() {

    // useRef use for access the element from the dom directly.

    const [laplapdo, setLapLapdo] = useState(true)
    const jabanRef = useRef()


    function jabanBaharNikalo() {
        console.log("nikal to lee")

        // console.log(jabanRef)
      
        if (laplapdo) {
            console.log("aae ho",laplapdo)
            jabanRef.current.style.backgroundColor = "red"
            jabanRef.current.style.marginTop = "20px"
            setLapLapdo(!laplapdo)
        }
        else {

            jabanRef.current.style.backgroundColor = "black"
            jabanRef.current.style.marginTop = "0px"
            setLapLapdo(!laplapdo)
        }

    }
    return (
        <div className="sakal">

            <div className="Face">
                <div className="leftEye"></div>
                <div className="RightEye"></div>
                <div className="nose"></div>
                <div className="lip">

                    <div className="tongue" ref={jabanRef}></div>
                </div>


            </div>

            <div className="wrapper">
                <div className="btn-container"><button onClick={jabanBaharNikalo} >
                    
                    
                    {
                        laplapdo?(<p>Tounge bahar nikhalo</p>):(<p> Tounge andar karo</p>)
                    }
                   
                    
                    
                    </button></div>
            </div>

        </div>
    )
}

export default SecondUseCaseOfUseRef