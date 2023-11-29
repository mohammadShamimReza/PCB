import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  {
    category: "CPU",
    link: "/cpu.jpg",
  },
  {
    category: "Motherboard",
    link: "/motherboard.jpg",
  },
  {
    category: "RAM",
    link: "/ram.jpg",
  },
  {
    category: "PSU",
    link: "/psu.jpg",
  },
  {
    category: "Storage",
    link: "/storage.jpg",
  },
  {
    category: "Monitor",
    link: "/monitor.jpg",
  },
  {
    category: "Mouse",
    link: "/mouse.jpg",
  },
  {
    category: "Keyboard",
    link: "/keyboard.jpg",
  },
];

const FeaturedCategories: React.FC = () => {
  return (
    <>
      <h1 className="mt-20 mb-12 text-center font-bold text-4xl underline">
        Categories
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24  ">
        {categories.map((category) => (
          <div key={category.category} className="">
            <Link href={`/featuredCategory/${category.category}`} passHref>
              <div className=" flex align-middle justify-center">
                <div className="relative w-32 h-32 bg-gray-200 shadow-2xl overflow-hidden group cursor-pointer hover:shadow-xl  rounded-lg">
                  <Image src={category.link} fill alt="category name" />
                </div>
              </div>
              <div className=" text-center text-blue-600 font-semibold group-hover:text-blue-800 transition duration-300 ">
                {category.category}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCategories;
