import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "CPU",
    link: "/cpu.jpg",
  },
  {
    name: "Motherboard",
    link: "/motherboard.jpg",
  },
  {
    name: "RAM",
    link: "/ram.jpg",
  },
  {
    name: "Power Supply Unit",
    link: "/psu.jpg",
  },
  {
    name: "Storage Device",
    link: "/storage.jpg",
  },
  {
    name: "Monitor",
    link: "/monitor.jpg",
  },
  {
    name: "Mouse",
    link: "/mouse.jpg",
  },
  {
    name: "Keyboard",
    link: "/keyboard.jpg",
  },
];

function PcBuilder() {
  return (
    <>
      <div className="">
        <h1 className="text-center mt-10 mb-16 text-6xl font-medium text-indigo-600">
          Build you dream PC
        </h1>
        {categories.map((category) => (
          <div
            key={category.name}
            className=" flex justify-center items-center mx-auto w-full max-w-screen-xl mb-7 "
          >
            <div className="flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-auto hover:shadow-xl  rounded-lg">
              <Image src={category.link} width={200} height={500} alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {category.name}
                </h5>
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <Image src={category.link} width={20} height={20} alt="" />
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p> */}

                <Link
                  href={`/featuredCategory/${category.name}`}
                  className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-60"
                >
                  Add {category.name}
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
            </div>
          </div>
        ))}
        <div className="mt-14 flex justify-center align-middle">
          <button className="block w-56 py-4 text-center text-3xl font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300">
            Build
          </button>
        </div>
      </div>
    </>
  );
}

export default PcBuilder;
