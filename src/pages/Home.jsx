import Hero from "../components/Hero";
import ProductsOverView from "../components/ProductsOverView";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import BannerTwo from "../components/BannerTwo";

function Home() {
  return (
    <div>
      <Hero />
      <ProductsOverView />
      <Banner />
      <Trending />
      <BannerTwo />
    </div>
  );
}

export default Home;
