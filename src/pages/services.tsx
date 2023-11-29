// pages/services.tsx
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCogs, FaDesktop, FaWrench } from "react-icons/fa";

const Service: React.FC = () => {
  return (
    <div className="container mx-auto my-8 max-w-6xl">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Our Services
      </h1>
      <div className="flex flex-col gap-8">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaDesktop className="text-5xl mb-4 mx-auto text-blue-500" />
          <h2 className="text-2xl font-semibold mb-4">Custom PC Build</h2>
          <p className="text-gray-600">
            We specialize in crafting high-performance custom PCs tailored to
            your specific requirements. Whether you&apos;re a gamer, content
            creator, or professional, we ensure the perfect system for your
            needs. We specialize in crafting high-performance custom PCs
            tailored to your specific requirements. Whether you&apos;re a gamer,
            content creator, or professional, we ensure the perfect system for
            your needs.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaWrench className="text-5xl mb-4 mx-auto text-green-500" />
          <h2 className="text-2xl font-semibold mb-4">Hardware Upgrades</h2>
          <p className="text-gray-600">
            Enhance your existing PC with the latest hardware upgrades. We offer
            a wide selection of components, including top-tier CPUs, powerful
            GPUs, high-capacity RAM, and fast storage solutions. We specialize
            in crafting high-performance custom PCs tailored to your specific
            requirements. Whether you&apos;re a gamer, content creator, or
            professional, we ensure the perfect system for your needs.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaCogs className="text-5xl mb-4 mx-auto text-purple-500" />
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <p className="text-gray-600">
            Experiencing issues with your PC? Our skilled technicians can
            diagnose and troubleshoot both hardware and software problems,
            ensuring your system runs smoothly and efficiently. We specialize in
            crafting high-performance custom PCs tailored to your specific
            requirements. Whether you&apos;re a gamer, content creator, or
            professional, we ensure the perfect system for your needs.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-800">
          Ready to elevate your PC experience?
        </h2>
        <p className="text-gray-600">
          Contact us today and let our experts help you build the ultimate
          custom PC.
        </p>
        <Link href={"PcBuilder"}>
          <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full transition duration-300 hover:bg-blue-700">
            Get Started <FaArrowRight className="inline ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
