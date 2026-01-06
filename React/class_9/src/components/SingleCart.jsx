
import "./SingleCart.css"
import { toast } from "react-toastify";

function SingleCart({ item, setCartItem, cartItem, itemQuantity, setItemQuantity }) {


  function addToCart(data) {
    setItemQuantity(item.quantity)
    item.isadded = true;
    const itemInCart = cartItem?.some((it) => {

      return it === data
    })



    console.log(itemInCart)

    setCartItem((oldData) => {
      return [...oldData, data]
    })
    toast.success("Item added in cart!");
  }


  //some thing is wrong

  function removeFromCart(data) {
    console.log(cartItem?.length)

    if (cartItem?.length === 1) {
      setCartItem([])
    }

    const filterItem = cartItem?.filter((it) => {
      console.log(it)
      return it?.productName !== data?.productName;
    })
    console.log(filterItem)
    setCartItem(filterItem)
    // data.isadded=undefined
    toast.warning("Item deleted from cart")
  }

  // increase quantity jab me + me click karunga 
  function incrementQunatity(item) {
    console.log(item)
    item.quantity = item.quantity + 1;
  }


  // idecrease quantity jab me - me click karunga 
  function decrementQunatity(item) {
    if (item.quantity === 1 && item.quantity > 0) {

      item.isadded = undefined;
      removeFromCart(item);
      console.log(item)
      return;
    }

    console.log(item)
    item.quantity = item.quantity - 1;

  }


  // console.log(item)
  return (
    <div className="product-card">
      <img src={item?.image
      } alt="img-info" />

      <div className="product-info">
        <p className="product-name">{item?.description}</p>

        <div className="product-bottom">
          <div>
            <p className="price">₹{item?.productPrice}</p>
            <p className="rating">⭐{item?.rating}</p>
          </div>
          {
            item.isadded === undefined ? (
              <button
                className="add-btn"
                onClick={() => addToCart(item)}
              >Add
              </button>
            ) :
              (<div className="qty-controls   add-btn" >

                <span className="qty-btn" onClick={() => {
                  decrementQunatity(item)
                  setItemQuantity(itemQuantity - 1)
                }}>-</span>



                <span className="qty-value">{item.quantity}</span>
                <span className="qty-btn" onClick={() => {
                  incrementQunatity(item)
                  setItemQuantity(itemQuantity + 1)
                }}>+</span>
              </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default SingleCart;
