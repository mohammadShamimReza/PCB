import { cpu } from "@/components/type/cpu";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/api/getdata`);
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
  if (typeof window === "undefined") {
    return { props: { data: [] } };
  }
  // Fetch data for the specific product based on the 'id' parameter
  const res = await fetch(`${process.env.URL}/api/getdata?id=${params?.id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

const ProductDetailPage = ({ data }: { data: cpu }) => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className="">
      {/* Left side - Product Image */}
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto mt-64">
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
      {/* <div className="flex align-middle justify-center mt-24">
        <Link
          href="#"
          className=" w-56 h-12 inline-flex items-center justify-between px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to builder
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round" // Changed to camelCase
              strokeLinejoin="round" // Changed to camelCase
              strokeWidth="2" // Changed to camelCase
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div> */}
    </div>
  );
};

export default ProductDetailPage;
