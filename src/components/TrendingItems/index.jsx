import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { items } from "../AllData";

export default function TrendingItems() {
  const trendingItems = items.filter((item) => {
    return item.id >= 8;
  });

  return (
    <>
      {trendingItems.map((singItem) => {
        return (
          <div className="sing-item" key={singItem.id}>
            <Link
              to={`/products/${singItem.id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="img">
                <img src={singItem.img} alt="Trending-item" />
              </div>
              <div className="title-price">
                <p className="title">{singItem.description}</p>
                <p className="price">{singItem.price}$</p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
