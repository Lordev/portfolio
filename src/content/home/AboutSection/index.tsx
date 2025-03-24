"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";
import { motion } from "framer-motion";
import ScrollContainer from "@/components/layout/ScrollContainer";
import { useRef } from "react";
import AboutImage from "./AboutImage";
import BackgroundImage from "./BackgroundImage";

const aboutChips: string[] = [
  "Design",
  "Develop",
  "Wireframing",
  "UX",
  "Responsiveness",
  "Prototyping",
  "Testing",
  "Deployment",
];

export default function AboutSection() {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  return (
    <section className="relative row py-240">
      <ScrollContainer
        containerRef={containerRef2}
        className="absolute h-4/5 -translate-x-6/12 aspect-[1495/1076] top-9/16 transform -translate-y-1/2 -z-10"
        offset={["start end", "end start"]}
      >
        {(scrollYProgress) => (
          <BackgroundImage scrollYProgress={scrollYProgress} />
        )}
      </ScrollContainer>
      <div className="row in-container">
        <div className="grid grid-cols-6 gap-24">
          <div className="col-span-2">
            <SectionHeading title="About" />
          </div>
          <div className="col-span-4">
            <div className="text-fluid-h3 col-span-2 text-gray-400 font-medium">
              “I{"'"}m a
              <motion.span
                style={{
                  color: "#DCC",
                }}
                whileInView={{
                  color: "var(--foreground)",
                  transition: { duration: 3 },
                }}
              >
                {" "}
                web enthusiast{" "}
              </motion.span>
              who loves turning ideas into interactive experiences. When I{"'"}m
              not, I{"'"}m probably exploring new tech trends or brewing the
              perfect of coffee.”
            </div>
          </div>
          <div className="col-start-3 col-span-2 flex flex-col justify-center gap-24">
            <div className="grid-cols-2 grid col-span-2 gap-24">
              <p className="text-gray-400">
                “I{"'"}m a web enthusiast who loves turning ideas into
                interactive experiences. When I{"'"}m not, I{"'"}m probably
                exploring new tech trends or brewing the perfect of coffee.” “I
                {"'"}m a web enthusiast who loves turning ideas into
                interactive.
              </p>
              <p className="text-gray-400">
                “I{"'"}m a web enthusiast who loves turning ideas into
                interactive experiences. When I{"'"}m not, I{"'"}m probably
                exploring new tech trends or brewing the perfect of coffee.”
              </p>
            </div>
            <motion.div
              className="col-span-2 self-start flex flex-wrap gap-16 test"
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aboutChips.map((chip) => (
                <motion.div key={chip} variants={childVariants}>
                  <Chip label={chip} />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <ScrollContainer
            containerRef={containerRef}
            className="col-start-5 col-span-2"
            offset={["start end", "end start"]}
          >
            {(scrollYProgress) => (
              <AboutImage scrollYProgress={scrollYProgress} />
            )}
          </ScrollContainer>
        </div>
      </div>
    </section>
  );
}
