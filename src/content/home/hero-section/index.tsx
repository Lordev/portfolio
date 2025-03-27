"use client";
import { useRef } from "react";
import ScrollContainer from "@/components/layout/ScrollContainer";
import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContainer containerRef={containerRef} className="h-2160 -mb-800 relative px-[var(--p-fluid-md)] -z-10 overflow-hidden">
      {(scrollYProgress) => (
        <>
          <HeroContent scrollYProgress={scrollYProgress} />
        </>
      )}
    </ScrollContainer>
  );
}
