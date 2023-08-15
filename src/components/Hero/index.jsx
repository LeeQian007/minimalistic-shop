import { Link } from "react-router-dom";
import "./index.css";
import LivingC from "../../img/hero-1.jpg";
import SkinCare from "../../img/hero-2.jpg";
import Kitchen from "../../img/hero-3.jpg";
import Electronics from "../../img/hero-4.jpg";

export default function Navbar() {
  return (
    <div>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link
                to="/categories/furnitures"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="img"></div>
                <img src={LivingC} alt="Live Comfortably" />
                <p>Live Comfortably</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link
                to="/categories/skin-care"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="img"></div>
                <img src={SkinCare} alt="Skin Care" />
                <p>Skincare</p>
              </Link>
            </div>
            <div className="featured grid-three">
              <Link
                to="/categories/kitchen"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="img"></div>
                <img src={Kitchen} alt="Kitchen" />
                <p>Kitchen</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link
                to="/categories/electronics"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="img"></div>
                <img src={Electronics} alt="Electronics" />
                <p>Electronics</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
