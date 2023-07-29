import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { cpu } from "../type/cpu";

function BuildProduct({ category, data }: { category: string; data: cpu[] }) {
  const build = useAppSelector((state) => state.build);
  const allValuesdata = Object.values(build);

  const product = data.filter((item) => allValuesdata.includes(item.id));
  const returnData = product.filter((item) => category === item.category);

  if (returnData.length === 0) {
    return (
      <>
        <button>
          <Link
            href={`/featuredCategory/${category}`}
            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-60"
          >
            Add {category}
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
        </button>
      </>
    );
  } else {
    return (
      <>
        <div className=" mb-2 ">
          <div className="">
            <Image
              src={returnData[0]?.image}
              width={100}
              height={100}
              alt={returnData[0]?.image}
            />
            Name: {returnData[0]?.Name.split(" ").slice(0, 3).join(" ")}...
            <br />
            Price: ${returnData[0]?.price}
          </div>
        </div>
        <button>
          <Link
            href={`/featuredCategory/${category}`}
            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-60"
          >
            chenge {category}
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
        </button>
      </>
    );
  }
}

export default BuildProduct;
