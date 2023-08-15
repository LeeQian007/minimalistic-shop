import React from "react";

import "./index.css";
import TrendingItems from "../TrendingItems";

export default function Trending() {
  // scroll left to see more tranding products
  const scrollLeft = () => {
    let slider = trendingRef.current;
    slider.scrollLeft = slider.scrollLeft - 237;
  };

  const scrollRight = () => {
    let slider = trendingRef.current;
    slider.scrollLeft = slider.scrollLeft + 237;
  };

  const trendingRef = React.useRef();

  return (
    <>
      <div className="Trending-now">
        <div className="container">
          <div className="Trending-now-container">
            <div className="title-buttons">
              <h2>Trending Now</h2>
              <div className="btns">
                <button className="left-btn" onClick={scrollLeft}>
                  <i className="iconfont icon-houtui"></i>
                </button>
                <button className="right-btn" onClick={scrollRight}>
                  <i className="iconfont icon-qianjin"></i>
                </button>
              </div>
            </div>
            <div className="Trending-slides" ref={trendingRef}>
              <TrendingItems />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
