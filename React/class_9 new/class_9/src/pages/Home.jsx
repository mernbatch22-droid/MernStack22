
import SingleCart from "../components/SingleCart";
import "./Home.css";
import BtnComponents from "../components/BtnComponents";

function Home({ totalPagesBtn, currPage, setCurrPage, products, setCartItem, cartItem, itemQuantity, setItemQuantity, inputValue, button }) {
  console.log("products", products);
  console.log(currPage, totalPagesBtn)

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
          <div className="connnn">
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
          </div>
      }


    </div>
      <div className="pagination-ccc"> <div className="pagination">
        <div className="stBtn">
          <button

            disabled={currPage === 1 ? true : false}

            className="prevBtn" onClick={() => {
              setCurrPage(currPage - 1)
            }}>
            prev
          </button>
        </div>
        <div className="cenTerBtn">
          {
            button?.map((i) => {
              return (
                <BtnComponents
                  i={i}
                  key={i}
                  setCurrPage={setCurrPage} />
              )
            })
          }
        </div>
        <div className="endBtn">
          <button
            className="mapBth"
            disabled={currPage === totalPagesBtn ? true : ""}
            onClick={() => {
              setCurrPage(currPage + 1)
            }}>
            Next
          </button>
        </div>
      </div></div>
    </>
  );
}

export default Home;
