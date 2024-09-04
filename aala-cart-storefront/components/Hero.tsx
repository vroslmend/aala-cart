import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10">
              <div>
                <Image
                  className="rounded-lg"
                  src="/placeholder.jpg"
                  alt="Hero Image"
                  width={1600}
                  height={1600}
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-black text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Saira Collection
                </h1>
                <h2 className="text-black text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  A brand for the modern woman, offering a range of stylish and
                  comfortable clothing pieces made from high quality fabrics.
                </h2>
              </div>
              <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#000000] text-[#fefefe] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Shop Now</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3 items-center">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl">
              <Image
                className="rounded-lg"
                src="/placeholder.jpg"
                alt="Hero Image"
                width={800}
                height={800}
              />
            </div>
            <Button
              variant="link"
              className="text-[#1c150d] text-base font-medium leading-normal"
            >
              Unstitched Suits
            </Button>
          </div>
          <div className="flex flex-col gap-3 pb-3 items-center">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl">
              <Image
                className="rounded-lg"
                src="/placeholder.jpg"
                alt="Hero Image"
                width={800}
                height={800}
              />
            </div>
            <Button
              variant="link"
              className="text-[#1c150d] text-base font-medium leading-normal"
            >
              Blankets
            </Button>
          </div>
          <div className="flex flex-col gap-3 pb-3 items-center">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl">
              <Image
                className="rounded-lg"
                src="/placeholder.jpg"
                alt="Hero Image"
                width={800}
                height={800}
              />
            </div>
            <Button
              variant="link"
              className="text-[#1c150d] text-base font-medium leading-normal"
            >
              Shoes
            </Button>
          </div>
          <div className="flex flex-col gap-3 pb-3 items-center">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl">
              <Image
                className="rounded-lg"
                src="/placeholder.jpg"
                alt="Hero Image"
                width={800}
                height={800}
              />
            </div>
            <Button
              variant="link"
              className="text-[#1c150d] text-base font-medium leading-normal"
            >
              Shawls
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
