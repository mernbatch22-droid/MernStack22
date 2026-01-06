import { useNavigate } from "react-router-dom"
import "./SingleCard.css"


function SingleCard({ item, setCardNo, cardNo }) {
  const navigate = useNavigate();
  return (
  <>  <div className="card" onClick={() => {
      navigate(`/card/product/${item?.id}`)
    }}>
      <img src={item?.image} alt="info" />
      <p>Title: <b>{item?.title}</b></p>
      <p>Price: <b>{item?.price}</b></p>
      <p>Rating: <b>{item?.rating?.rate} ⭐</b></p>
     
    </div>
    <div>
       <button className="btn" onClick={() => {
        if (cardNo === 20) {
          setCardNo(1)
          return;
        }
        setCardNo(cardNo + 1)
      }}>Change Card</button>
    </div></>

  )
}

export default SingleCard