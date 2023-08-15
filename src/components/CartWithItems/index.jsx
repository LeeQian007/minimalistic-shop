import React, { useContext } from "react";
import "./index.css";
import { useStateContext } from "../../context/StateContext";

export default function CartWithItems() {
  // const { cartItems } = useStateContext();
  const cartItems = [];

  const quantity = 1;

  return (
    <>
      <div className="cart-all-div">
        <div className="cart-all">
          {cartItems.map((cartItemObj) => {
            return (
              <div className="cart-pay" key={cartItemObj.id}>
                <div className="body-cart">
                  <div className="img">
                    <img src={cartItemObj.img} alt="cart-img" />
                  </div>
                  <div className="info">
                    <div className="top-info">
                      <p className="name">{cartItemObj.description}</p>
                      <p className="price">
                        {(cartItemObj.price * quantity).toFixed(2)}&nbsp;$
                      </p>
                    </div>
                    <div className="button-info">
                      <div className="btns">
                        <button
                        // onClick={() => {
                        //   if (quantity > 1) {
                        //     setQuantity(quantity - 1);
                        //   }
                        // }}
                        >
                          -
                        </button>
                        <div className="quantaty">{quantity}</div>
                        <button
                        // onClick={() => {
                        //   setQuantity(quantity + 1);
                        // }}
                        >
                          +
                        </button>
                      </div>
                      <h2>X</h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sub-cart">
        <h2 className="sub-total">Subtotal</h2>
        <div className="price-checkout">
          <p>999$</p>
          <button>Go to Checkout</button>
        </div>
      </div>
    </>
  );
}
