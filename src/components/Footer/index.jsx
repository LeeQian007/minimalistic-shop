import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function NewsLetter() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="all-text">
            <div className="footer-links">
              <Link>About</Link>
              <Link>Store locator</Link>
              <Link>FAQs</Link>
              <Link>News</Link>
              <Link>Careers</Link>
              <Link>Contact Us</Link>
            </div>
            <div className="designer">Design by XXXX</div>
          </div>
        </div>
      </div>
    </>
  );
}
