import Cart from "@/components/part/Cart";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <Cart />
    </div>
  );
};

export default Home;
