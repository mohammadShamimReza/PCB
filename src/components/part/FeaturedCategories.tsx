import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  {
    name: "CPU / Processor",
    link: "https://i.ibb.co/kMcqRWW/circuit-cyberspace-closeup-with-neon-lights.jpg",
  },
  {
    name: "Motherboard",
    link: "https://i.ibb.co/kMcqRWW/circuit-cyberspace-closeup-with-neon-lights.jpg",
  },
  {
    name: "RAM",
    link: "https://i.ibb.co/kMcqRWW/circuit-cyberspace-closeup-with-neon-lights.jpg",
  },
  {
    name: "Power Supply Unit",
    link: "https://i.ibb.co/kMcqRWW/circuit-cyberspace-closeup-with-neon-lights.jpg",
  },
  {
    name: "Storage Device",
    link: "https://i.ibb.co/kMcqRWW/circuit-cyberspace-closeup-with-neon-lights.jpg",
  },
  {
    name: "Monitor",
    link: "https://i.ibb.co/kMcqRWW/circuit-cyberspace-closeup-with-neon-lights.jpg",
  },
  {
    name: "Mouse",
    link: "https://i.ibb.co/kMcqRWW/circuit-cyberspace-closeup-with-neon-lights.jpg",
  },
  {
    name: "Keyboard",
    link: "https://i.ibb.co/kMcqRWW/circuit-cyberspace-closeup-with-neon-lights.jpg",
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
          <Link
            key={category.name}
            href={`featuredCategory/${category.name}`}
            passHref
          >
            <div className="group cursor-pointer">
              <div className="relative w-32 h-32 bg-gray-200 rounded-lg shadow-md overflow-hidden ">
                <Image src={category.link} fill alt="category name" />
              </div>
              <div className="mt-2 text-center text-blue-600 font-semibold group-hover:text-blue-800 transition duration-300">
                {category.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FeaturedCategories;
