import Cart from "@/components/part/Cart";
import FeaturedCategories from "@/components/part/FeaturedCategories";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      {/* <ImageSlider /> */}
      <Cart />
      <FeaturedCategories />
    </div>
  );
};

export default Home;
