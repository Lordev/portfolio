"use client";
import { useRef } from "react";
import ScrollContainer from "@/components/layout/ScrollContainer";
import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContainer containerRef={containerRef} className="relative px-[var(--p-fluid-md)] -z-10  overflow-hidden gap-24">
      {(scrollYProgress) => (
        <>
          <HeroContent scrollYProgress={scrollYProgress} />
        </>
      )}
    </ScrollContainer>
  );
}
