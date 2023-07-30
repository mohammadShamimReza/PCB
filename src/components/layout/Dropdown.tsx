// components/Dropdown.tsx
import auth from "@/firebase/firebase.auth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Dropdown = () => {
  const [user, loading, error] = useAuthState(auth);
  const { data: session } = useSession();
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

  const handleLogOut = () => {
    signOut();
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleDropdownToggle}
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        <Image
          src="https://i.ibb.co/mHJTv57/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          width={30}
          height={30}
          alt="PCB LOGO"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-lg">
          {!session?.user && !user?.email ? (
            <>
              <Link
                href="/login"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
              >
                Log in
              </Link>
              <Link
                href="/signUp"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/Profile"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
              >
                profile
              </Link>
              <button
                onClick={() => handleLogOut()}
                className="w-full text-left block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
              >
                log out
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
