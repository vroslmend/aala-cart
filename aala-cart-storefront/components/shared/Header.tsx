import { navItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left div */}
          <div className="w-1/4">{/* Content for left div */}</div>

          {/* Center div with logo */}
          <div className="flex-1 flex justify-center">
            <Image src="/logo-black.png" width={100} height={100} alt="Logo" />
          </div>

          {/* Right div */}
          <div className="w-1/4 flex justify-end">
            {navItems.map((navItem) => (
              <Link key={navItem.link} href={navItem.link} className="ml-4">
                <h1>{navItem.name}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
