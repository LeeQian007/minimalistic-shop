import React, { Fragment, useContext } from "react";
// import { Link } from "react-router-dom";
import "./index.css";
import { items } from "../AllData";
import Trending from "../Trending";
import { useParams } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";

function ProductPages() {
  // add and decrease buttons
  const { qty, setQty, setNotify, notify, setCart, cart } = useStateContext();

  const decrease = () => {
    if (qty > 1) {
      // 不可以用 ++ 因为只有let定义的才可以
      setQty(qty - 1);
    }
  };
  const increase = () => {
    setQty(qty + 1);
  };

  // get the right id page
  const { id } = useParams();
  const newItems = items.filter((item) => {
    return item.id === parseInt(id);
  });

  // chang pics bt mouseover
  const imgChangeRef = React.createRef();
  const changePic = (e) => {
    imgChangeRef.current.src = e.target.src;
  };

  // calculate the total price
  const calcTotalPrice = (quantity) => {
    return (quantity * newItems[0].price).toFixed(2);
  };

  return (
    // fragment 可以加 key=....
    <Fragment>
      <div className="product-page">
        <div className="container">
          <div className="product-page-main">
            <h2 className="product-name">{newItems[0].description}</h2>
            <div className="product-info">
              <div className="product-left">
                <div className="big-img">
                  <img src={newItems[0].img} alt="product" ref={imgChangeRef} />
                </div>

                <div className="small-img">
                  <img
                    src={newItems[0].img}
                    alt="product"
                    onMouseOver={changePic}
                  />
                  <img
                    src={newItems[0].otherImgs[0]}
                    alt="product"
                    onMouseOver={changePic}
                  />
                  <img
                    src={newItems[0].otherImgs[1]}
                    alt="product"
                    onMouseOver={changePic}
                  />
                </div>
              </div>
              <div className="product-right">
                <div className="text-box">
                  <p className="product-details">{newItems[0].specs}</p>
                  <div className="price-quantity">
                    <p>Quantity</p>
                    <div className="count-btn">
                      <button onClick={decrease}>-</button>
                      <p className="buying-amount">{qty}</p>
                      <button onClick={increase}>+</button>
                    </div>
                    <p className="price">{calcTotalPrice(qty)}&nbsp;$</p>
                  </div>
                  <div className="btns-buy">
                    <button
                      className="add"
                      onClick={() => {
                        // addToCart(newItems[0]);
                        setNotify(!notify);
                      }}
                    >
                      ADD TO CART
                    </button>
                    <button
                      className="buy"
                      onClick={() => {
                        setCart(!cart);
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-box">
              <div className="spec">
                <h2 className="title">Texture:</h2>
                <p>{newItems[0].texture}</p>
              </div>
              <div className="spec">
                <h2 className="title">Weight:</h2>
                <p>{newItems[0].weight}</p>
              </div>
              <div className="spec">
                <h2 className="title">Size:</h2>
                <p>{newItems[0].size}</p>
              </div>
            </div>
            <div className="bottom-box">
              <Trending />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductPages;
