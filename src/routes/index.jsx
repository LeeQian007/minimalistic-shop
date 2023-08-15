import Home from "../pages/Home";
import Categories from "../pages/Categories";
import CategoriesAll from "../components/Categories-pages/All";
import Furnitures from "../components/Categories-pages/Furnitures";
import Electronic from "../components/Categories-pages/Electronic";
import Lamps from "../components/Categories-pages/Lamps";
import Kitchen from "../components/Categories-pages/Kitchen";
import Chairs from "../components/Categories-pages/Chairs";
import SkinCare from "../components/Categories-pages/SkinCare";
import ProductMain from "../pages/ProductPages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "categories",
    element: <Categories />,
    children: [
      {
        path: "all",
        element: <CategoriesAll />,
      },
      {
        path: "furnitures",
        element: <Furnitures />,
      },
      {
        path: "electronics",
        element: <Electronic />,
      },
      {
        path: "lamps",
        element: <Lamps />,
      },
      {
        path: "kitchen",
        element: <Kitchen />,
      },
      {
        path: "chairs",
        element: <Chairs />,
      },
      {
        path: "skin-care",
        element: <SkinCare />,
      },
    ],
  },
  {
    path: "products/:id",
    element: <ProductMain />,
  },
];
