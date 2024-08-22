import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center pb-2 border-b-2 border-gray-100 space-x-4 px-20">
        <div className="mr-auto">
          <Image src="/logo-black.png" width={120} height={120} alt="Logo" />
        </div>
        <Link
          href=""
          className="flex justify-center items-center space-x-4 pt-4"
        >
          <h1 className="font-light p-2 border-transparent border-2 rounded-lg transition ease-in-out hover:border-2  hover:border-black hover:rounded-lg hover:text-white hover:bg-black duration-300 ">
            Home
          </h1>
        </Link>
        <Link
          href=""
          className="flex justify-center items-center space-x-4 pt-4"
        >
          <h1 className="font-light p-2 border-transparent border-2 rounded-lg transition ease-in-out hover:border-2  hover:border-black hover:rounded-lg hover:text-white hover:bg-black duration-300 ">
            About
          </h1>
        </Link>
        <Link
          href=""
          className="flex justify-center items-center space-x-4 pt-4"
        >
          <h1 className="font-light p-2 border-transparent border-2 rounded-lg transition ease-in-out hover:border-2  hover:border-black hover:rounded-lg hover:text-white hover:bg-black duration-300 ">
            Shop
          </h1>
        </Link>
        <Link
          href=""
          className="flex justify-center items-center space-x-4 pt-4"
        >
          <h1 className="font-light p-2 border-transparent border-2 rounded-lg transition ease-in-out hover:border-2  hover:border-black hover:rounded-lg hover:text-white hover:bg-black duration-300 ">
            Contact
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
