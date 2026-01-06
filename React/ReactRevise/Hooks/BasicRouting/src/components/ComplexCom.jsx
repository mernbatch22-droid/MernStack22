import { useParams } from "react-router-dom"


function ComplexCom() {
    // const urlParameter=useParams();
    // console.log(urlParameter);
    // const {id,name,age}=urlParameter;
    const {id,name,age}=useParams()
    console.log(id,name,age)
  return (
    <div>ComplexCom</div>
  )
}

export default ComplexCom