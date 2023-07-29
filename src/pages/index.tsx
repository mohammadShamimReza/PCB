// components/part/Home.tsx
import Cart from "@/components/part/Cart";
import FeaturedCategories from "@/components/part/FeaturedCategories";
import { GetStaticProps } from "next";

export type cpu = {
  id: number;
  image: string;
  category: string;
  price: number;
  Name: string;
  rating: number;
  status: string;
};

interface HomeProps {
  data: cpu[];
}

const Home = ({ data }: HomeProps) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <Cart data={data} />
      <FeaturedCategories />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  return { props: { data } };
};

export default Home;
