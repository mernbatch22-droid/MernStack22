import "./SingleCard.css"

function SingleCard({ item }) {
  return (
    <div className="card">
      <img src={item?.image} alt="Product image" />
      <p>Title: <b>{item?.title}</b></p>
      <p>Price: <b>{item?.price}</b></p>
      <p>Rating: <b>{item?.rating?.rate} ⭐</b></p>
    </div>

  )
}

export default SingleCard