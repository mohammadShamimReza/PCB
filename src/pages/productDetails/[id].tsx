import { cpu } from "@/components/type/cpu";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();

  const ids = data.map((product: cpu) => product.id.toString());

  const paths = ids.map((id: string) => ({ params: { id } }));

  return {
    paths,
    fallback: false, // or 'blocking' if you want to use blocking fallback
  };
};

interface featuredProps {
  data: cpu;
}

export const getStaticProps: GetStaticProps<featuredProps> = async ({
  params,
}) => {
  // Fetch data for the specific product based on the 'id' parameter
  const res = await fetch(`http://localhost:5000/data/${params?.id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

const ProductDetailPage = ({ data }: { data: cpu }) => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto mt-64">
      {/* Left side - Product Image */}
      <div className="md:w-1/2 p-4">
        <Image
          src={data?.image}
          alt={data?.Name}
          width={1000}
          height={1000}
          objectFit="contain"
        />
      </div>

      {/* Right side - Product Information */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Name: {data?.Name}</h2>
        <p className="text-gray-600 text-lg mb-4">
          Price: ${data?.price?.toFixed(2)}
        </p>
        <p className="text-gray-800">Category: {data?.category}</p>
        <p className="text-gray-800">Rating: {data?.rating}</p>
        <p className="text-gray-800">Status: {data?.status}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
