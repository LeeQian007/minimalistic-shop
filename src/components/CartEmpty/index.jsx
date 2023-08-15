import React from "react";
import CartPic from "../../img/empty-cart.png";
import "./index.css";

export default function CartEmpty(closeCart) {
  //   console.log(closeCart);
  return (
    <>
      <div className="empty-cart">
        <img src={CartPic} alt="EmptyCart" />
        <p>Your cart is empty 🥲</p>
        <button onClick={closeCart.onClick}>Keep Browsing</button>
      </div>
    </>
  );
}
