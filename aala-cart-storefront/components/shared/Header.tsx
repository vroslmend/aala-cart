import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link
          href=""
          className="flex justify-center items-center space-x-4 pt-4"
        >
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Shop</h1>
          <h1>Contact</h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
