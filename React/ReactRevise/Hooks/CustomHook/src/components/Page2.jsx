
import useApiCall from '../hook/useApiCall'
function Page2() {


    const { callCardApi, data } = useApiCall()
    callCardApi("https://fakestoreapi.com/products/2")
    return (
        <div className="card">
            <img src={data?.image} alt="Product" className="card-image" />

            <div className="card-body">
                <h3 className="card-title">Product Title:{data?.title.substring(0, 15)}</h3>
                <p className="card-description">
                    {data?.description.substring(0, 35)}
                </p>
                <p className="card-price">${data?.price}</p>
            </div>
        </div>
    )
}

export default Page2