import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { link } from "fs";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center bg-black text-white text-sm py-2 ">
        <div className="inline-flex items-center justify-center gap-1">
          <p>Free Shipping Over Rs. 5000</p>
          <ArrowRight size={15} />
        </div>
      </div>
      <div className="w-full inline-flex items-center justify-between py-2 px-10">
        <Image
          src="/logo-light.png"
          width={100}
          height={100}
          alt="Aala Cart Logo"
        />
        <div>
          <nav className="inline-flex items-center justify-center gap-4">
            <Button variant={"link"} size={"lg"}>
              Home
            </Button>
            <Button variant={"link"} size={"lg"}>
              Shop
            </Button>
            <Button variant={"link"} size={"lg"}>
              About
            </Button>
            <Button variant={"link"} size={"lg"}>
              Contact
            </Button>
            <Button size={"sm"}>Get in touch</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
