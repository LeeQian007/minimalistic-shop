import ProductItems from "../ProductItems/index";
import "./index.css";

export default function Navbar() {
  return (
    <div>
      <div className="container">
        <div className="over-view-container">
          <h2>Products Overview</h2>
        </div>

        <div className="product-grid">
          <ProductItems />
        </div>
      </div>
    </div>
  );
}
