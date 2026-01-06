import { useNavigate, useParams } from "react-router-dom"
import "./SingleCardAllInfo.css"

function SingleCardAllInfo({ item }) {
    const navigate = useNavigate();
    // const para=useParams();
    // const {id}=para
    // console.log(id,para)
    const { id } = useParams()
    console.log(
        id
    )

    return (
        <div className="card">
            <img src={item?.image} alt="info" />
            <p>Title: <b>{item?.title}</b></p>
            <p>Price: <b>{item?.price}</b></p>
            <p>Rating: <b>{item?.rating?.rate} ⭐</b></p>
            <p>Description: <b>{item?.description.substr(0, 20)}</b></p>
            <p>count: <b>{item?.rating.count}</b></p>
            <p>category: <b>{item?.category} ⭐</b></p>
            <button className="btn" onClick={() => {
                navigate("/")

            }}>Back to Home</button>
        </div>
    )
}

export default SingleCardAllInfo