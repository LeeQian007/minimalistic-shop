import React from "react";
import "./index.css";
import banner2 from "../../img/banner2.jpg";
import { Link } from "react-router-dom";

export default function BannerTwo() {
  return (
    <>
      <div className="Second-Banner">
        <div className="container">
          <div className="second-banner-container">
            <div className="second-banner-left">
              <img src={banner2} alt="Banner" />
            </div>
            <div className="second-banner-right">
              <div className="all-text">
                <h2>Comfortable & Elegante Living</h2>
                <p>
                  RAOUF Products are all made to standard sizes so that you can
                  mix and match them freely.
                </p>
                <Link to="/categories/all">
                  <button onClick={() => window.scrollTo(0, 0)}>
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
