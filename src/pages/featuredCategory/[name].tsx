import { useGetCpuQuery } from "@/redux/features/cart/CartAPi";
import Image from "next/image";
import Link from "next/link";

function FeaturedCategory() {
  const { data, error, isError, isFetching, isLoading, isSuccess } =
    useGetCpuQuery(undefined);

  console.log(data);
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24 mx-auto w-full max-w-screen-xl">
      {data?.map((product: Cpu) => (
        <div
          key={product?.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Link href={`/productDetails/${product?.id}`}>
            <div className="">
              <Image
                src={product?.image}
                width={350}
                height={200}
                alt="cart pic"
              />
            </div>

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product?.productName}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Price: ${product?.price}
                <br />
                Rating: {product?.rating} *
                <br />
                Staus: {product?.status}
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FeaturedCategory;
