import "./index.css";

import { items } from "../AllData";
import { Link } from "react-router-dom";

export default function ProductItems() {
  const overViewItems = items.filter((item) => {
    return item.id <= 8;
  });

  // console.log(overViewItems);

  return (
    // grid 要直接 接着要grid的对象 不然会出错
    <>
      {overViewItems.map((item) => {
        return (
          <div key={item.id} className="products">
            <Link
              to={`/products/${item.id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
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
    </>
  );
}
