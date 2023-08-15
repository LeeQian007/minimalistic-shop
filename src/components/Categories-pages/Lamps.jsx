import React from "react";
import { items } from "../AllData";
import { Link } from "react-router-dom";

export default function filteredItem() {
  const filteredItems = items.filter((item) => {
    return item.category === "lamp";
  });

  return (
    <>
      <div className="all-items">
        <div className="container">
          <div className="product-grid">
            {filteredItems.map((item) => {
              return (
                <div key={item.id} className="products">
                  <Link to={`/products/${item.id}`}>
                    <div className="img">
                      <img src={item.img} alt="product" />
                    </div>
                    <div className="product-descrip">
                      <p>{item.description}</p>
                      <p className="item-price">{item.price}$</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
