import React from "react";
import { AspectRatio } from "./aspect-ratio";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center container">
      <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
        <Image
          src="/placeholder.jpg"
          alt="Placeholder"
          width={800}
          height={600}
        />
      </AspectRatio>
    </div>
  );
};

export default Hero;
