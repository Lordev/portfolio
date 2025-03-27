"use client";
import {
  motion,
  useTransform,
  MotionValue,
  easeIn,
} from "framer-motion";
import Image from "next/image";
import HeroCTA from "./HeroCTA";

interface HeroContentProps {
  scrollYProgress: MotionValue<number>;
}

export default function HeroContent({
  scrollYProgress,
}: HeroContentProps) {
  const transformYText = useTransform(scrollYProgress, [0, 1], ["0vw", "80vw"]);
  

  const opacityText = (
    useTransform(scrollYProgress, [0.7, 1], [1, 0], {
      damping: 1000,
      stiffness: 200,
    })
  );

  const rotate360 = (
    useTransform(scrollYProgress, [0, 1], [0, 180], {
      damping: 100,
      stiffness: 20,
    })
  );

  return (
    <>
      <motion.div
        className="absolute w-1000 aspect-[1206/1162] top-550 left-1/2 -translate-x-1/2"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0vw", "20vw"], easeIn),
          opacity: (
            useTransform(scrollYProgress, [0.25, 1], [1, 0])
          ),
          zIndex: useTransform(scrollYProgress, [0.25, 1], [10, -10]),
        }}
      >
        <Image
          src="/hero/hero-image.png"
          alt="Picture of the author"
          layout="fill"
          className=""
        />
      </motion.div>
      <div className="absolute top-700 left-800 w-800 h-800 bg-radial from-purple-950 to-50% to-[var--background] rounded-md -z-10"></div>
         <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -500]),
        }}
      >
      <HeroCTA />
      </motion.div>
      <motion.div
        className="absolute top-120 w-1403 h-536 left-1/2 -translate-x-1/2 z-10 mix-blend-difference"
        style={{
          opacity: opacityText,
          y: transformYText
        }}
      >
        <Image src="/hero/hero-heading.svg" alt="" layout="fill" />
      </motion.div>
    </>
  );
}
