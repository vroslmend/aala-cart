// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
              View Collection <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>Test</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Welcome to Saira's Collections, where timeless elegance meets
              modern style. Explore our curated selection of high-quality
              clothing, designed to make every moment memorable. Whether you're
              looking for the perfect outfit for a special occasion or everyday
              wear, find something unique and beautiful at Saira's Collections.
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src="/hero-1.png"
              width={1920}
              height={1080}
              alt="hero image"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
