
import SingleCart from "../components/SingleCart";
import "./Home.css";

function Home({ products, setCartItem, cartItem, itemQuantity, setItemQuantity, inputValue, button }) {
  console.log("products", products);

  const opArray = products.filter((item) => item?.description?.toLowerCase().includes(inputValue?.toLowerCase(), 0));


  return (
    <>    <div>
      {
        inputValue !== undefined ? (
          <div>
            {
              opArray?.length === 0 ? (<p>No matching item exist type to right i</p>) : (<div className="product-grid">
                {
                  opArray?.map((it, index) => (
                    <SingleCart
                      key={index}
                      item={it}
                      setCartItem={setCartItem}
                      cartItem={cartItem}
                      itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}
                    />
                  ))
                }
              </div>)
            }


          </div>
        ) :
          <div className="product-grid">
            {
              products.map((it, index) => (
                <SingleCart
                  key={index}
                  item={it}
                  setCartItem={setCartItem}
                  cartItem={cartItem}
                  itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}
                />
              ))
            }
          </div>
      }


    </div>
      <div>
        {
          button.map((i) => {
            return (<button>{i}</button>)
          })
        }

      </div></>
  );
}

export default Home;
