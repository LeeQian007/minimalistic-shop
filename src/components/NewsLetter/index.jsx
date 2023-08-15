import React from "react";
import "./index.css";

export default function NewsLetter() {
  return (
    <>
      <div className="news-letter">
        <div className="news-letter-container">
          <div className="news-letter-text">
            <h2 className="title">NewsLetter</h2>
            <form>
              <input type="text" placeholder="your@email.com" />
              <button className="subscribe">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
