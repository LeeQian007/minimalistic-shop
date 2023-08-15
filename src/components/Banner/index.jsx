import banner1 from "../../img/banner1.jpg";
import "./index.css";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-container">
            <div className="banner-left">
              <div className="all-text">
                <h2>Creative harmonious living</h2>
                <p>
                  RAOUF Products are all made to standard sizes so that you can
                  mix and match them freely.
                </p>
                <div className="button">
                  <Link to="/categories/all">
                    <button onClick={() => window.scrollTo(0, 0)}>
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="img">
              <img src={banner1} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
