import "./SingleCard.css"


function SingleCard({ item, setCardNo, cardNo }) {
  return (
    <div className="card">
      <img src={item?.image} alt="Product image" />
      <p>Title: <b>{item?.title}</b></p>
      <p>Price: <b>{item?.price}</b></p>
      <p>Rating: <b>{item?.rating?.rate} ⭐</b></p>
      <button className="btn" onClick={() => {
        if (cardNo === 20) {
          setCardNo(1)
          return;
        }
        setCardNo(cardNo + 1)
      }}>Change Card</button>
    </div>

  )
}

export default SingleCard