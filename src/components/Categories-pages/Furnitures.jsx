import React from "react";
import { items } from "../AllData";
import { Link } from "react-router-dom";

export default function Furnitures() {
  const FurnitureItems = items.filter((item) => {
    return item.category === "furniture";
  });

  return (
    <>
      <div className="all-items">
        <div className="container">
          <div className="product-grid">
            {FurnitureItems.map((item) => {
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
