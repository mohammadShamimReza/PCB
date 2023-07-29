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
      <div className="flex justify-center space-x-8 py-8 ">
        {categories.map((category) => (
          <div key={category.category} className="">
            <Link href={`/featuredCategory/${category.category}`} passHref>
              <div className="group cursor-pointer hover:shadow-xl  rounded-lg">
                <div className="relative w-32 h-32 bg-gray-200 rounded-lg shadow-md overflow-hidden ">
                  <Image src={category.link} fill alt="category name" />
                </div>
              </div>
              <div className="mt-2 text-center text-blue-600 font-semibold group-hover:text-blue-800 transition duration-300 ">
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
