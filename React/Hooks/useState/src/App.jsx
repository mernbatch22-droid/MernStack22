import { useState } from "react"

function App() {
  // const clgData={
  //   name:"Medicaps",
  //   address:"Indore",
  //   clgType:"Private",
  //   fees:1100000
  // }

  // const [info,setInfo]=useState(clgData)

  const [info, setInfo] = useState({
    name: "Medicaps",
    address: "Indore",
    clgType: "Private",
    fees: 1100000
  })


  function changeCollageInfo() {
    //  setInfo("ips")
    // setInfo({
    //   name: "Ips",
    //   address: "Vijay Nagar",
    //   clgType: "Private++",
    //   fees: 900000
    // })

    // setInfo((prev)=>{
    //   return prev;
    // })

    //  setInfo((prev)=>{
    //   let valu = {...prev, name1: "Ips"};
    //   console.log(valu)
    //   return prev, {name: "Ips"};
    // })

    //    setInfo((prev)=>{
    //   let valu = {...prev, name: "Ips"};
    //   console.log(valu)
    //   return valu;
    // })

      setInfo((prev)=>{
        return {...prev,name:"IPS"}
      })
  }
  return (
    <div>
      <p>Collage Name:<b>{info?.name}</b></p>
      <p>Address:<b>{info?.address}</b></p>
      <p> Collage Type:<b>{info?.clgType}</b></p>
      <p>Fees:<b>{info?.fees}</b></p>
      
      <button onClick={() => changeCollageInfo()}>change collage Details</button>

    </div>
  )
}
export default App