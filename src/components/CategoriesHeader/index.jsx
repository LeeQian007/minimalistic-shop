import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function CategoriesHeader() {
  return (
    <>
      <div className="category-all">
        <div className="container">
          <div className="category-all-container">
            <div className="title-home">
              <Link to="/">&lt; Home</Link>
              <h2>Title</h2>
            </div>
            <div className="filter-btn">
              <Link to="all">
                <button>All</button>
              </Link>
              <Link to="furnitures">
                <button>Furnitures</button>
              </Link>
              <Link to="electronics">
                <button>Electronic</button>
              </Link>
              <Link to="lamps">
                <button>Lamps</button>
              </Link>
              <Link to="kitchen">
                <button>Kitchen</button>
              </Link>
              <Link to="chairs">
                <button>Chairs</button>
              </Link>
              <Link to="skin-care">
                <button>Skin Care</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
