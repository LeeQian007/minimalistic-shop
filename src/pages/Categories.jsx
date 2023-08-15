import { Outlet } from "react-router-dom";
import CategoriesHeader from "../components/CategoriesHeader";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;
