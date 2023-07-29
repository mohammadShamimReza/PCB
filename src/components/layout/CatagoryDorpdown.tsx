// components/CategoryDropdown.tsx
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleDropdownToggle}
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Categories
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-lg">
          <Link
            href={`/featuredCategory/CPU`}
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
          >
            CPU / Processor
          </Link>
          <Link
            href={`/featuredCategory/Mohterboard`}
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
          >
            Motherboard
          </Link>
          <Link
            href={`/featuredCategory/RAM`}
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
          >
            RAM
          </Link>
          <Link
            href={`/featuredCategory/PSU`}
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
          >
            Power Supply Unit
          </Link>
          <Link
            href={`/featuredCategory/Storage`}
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
          >
            Storage Device
          </Link>
          <Link
            href={`/featuredCategory/Monitor`}
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
          >
            Monitor
          </Link>
          <Link
            href={`/featuredCategory/Mouse`}
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
          >
            Mouse
          </Link>
          <Link
            href={`/featuredCategory/Keyboard`}
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
          >
            Keyboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
