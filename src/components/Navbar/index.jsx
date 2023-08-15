import { Link } from "react-router-dom";
import Navlogo from "../../img/Nav-logo.png";
import "./index.css";
import { useContext, useState } from "react";
import CartEmpty from "../CartEmpty";
import { useStateContext } from "../../context/StateContext";
import CartWithItems from "../CartWithItems";

export default function Navbar() {
  // set Nav bar height according to scroll
  const [navHeight, setNavHeight] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavHeight(true);
    } else {
      setNavHeight(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const { cart, setCart, cartItems, setNotify, notify } = useStateContext();

  return (
    <>
      {/* here is the shadow that when you open the cart */}
      <div
        className={`shadow ${cart ? "show" : "hide"}`}
        onClick={() => {
          setCart(!cart);
        }}
      ></div>

      {/* here is your shopping cart 💕 */}
      <div className={`cart ${cart ? "show" : "hide"}`}>
        <div className="title-box">
          <h2 className="title">Your Shopping Cart ({cartItems.length})</h2>
          <h2
            className="close"
            onClick={() => {
              setCart(!cart);
            }}
          >
            X
          </h2>
        </div>
        {cartItems.length >= 1 ? (
          <CartWithItems />
        ) : (
          <CartEmpty
            onClick={() => {
              setCart(!cart);
            }}
          />
        )}
      </div>

      {/* nav Bar */}
      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${navHeight ? "shortNav" : ""} `}>
            {/* Nav-bar Logo */}
            <Link to="/">
              <img
                src={Navlogo}
                alt="NavLogo"
                onClick={() => window.scrollTo(0, 0)}
              />
            </Link>
            {/* Nav-bar Links */}
            <div className="nav-links">
              <Link to="/categories/all">CATEGORIES</Link>
              <Link to="/products/4">PRODUCT PAGE</Link>
              <i
                className="iconfont icon-cart"
                onClick={() => {
                  setCart(!cart);
                }}
              ></i>
            </div>
          </div>
        </div>
      </nav>

      {/* add to cart notify */}
      {/* onAnimationEnd */}
      <div
        onAnimationEnd={() => {
          setNotify(false);
        }}
        className={`notify ${notify ? "yeah" : "nah"}`}
      >
        <p className="pop-up">
          Products have been added to cart successfully 💕
        </p>
      </div>
    </>
  );
}
