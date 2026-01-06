import Loader from "../components/Loader.jsx"
import SingleCard from "../components/SingleCard.jsx"
import "./Page.css"
function Home({ data, loader }) {

  return (
    <>
      {loader === true ? (<Loader />) : (<div className="Home">

        {
          data?.map((item, index) => {
            return <SingleCard key={index} item={item} />
          })
        }
      </div >)

      }


    </>
  )
}

export default Home