import Loader from "../components/Loader.jsx"
import SingleCard from "../components/SingleCard.jsx"
import "./Page.css"
function Home({ data, loader, setCardNo, cardNo }) {


  return (
    <>
      {loader === true ? (<Loader />) :
        (<div className="Home">
          <SingleCard item={data} setCardNo={setCardNo} cardNo={cardNo}/>
        </div >)


      }
     
    </>
  )
}

export default Home