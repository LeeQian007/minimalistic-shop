import { items } from "../AllData";
import { Link } from "react-router-dom";

export default function CategoriesItems() {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id} className="products">
            <Link>
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
