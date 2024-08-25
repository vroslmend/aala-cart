import React from "react";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-black text-white text-sm py-2 ">
        <div className="inline-flex items-center justify-center gap-1">
          <p>Free Shipping Over Rs.5000</p>
          <ArrowRight size={15} />
        </div>
      </div>
    </div>
  );
};

export default Header;
