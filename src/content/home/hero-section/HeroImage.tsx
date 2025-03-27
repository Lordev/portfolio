'use client';
import Image from "next/image";
import { motion, useSpring, useTransform } from "framer-motion";

export default function HeroImage(scrollYProgress: number) {
  return (
    <>
      <motion.div
        className="relative top-0 left-0 w-full h-full -z-10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 300]),
          opacity: useSpring(useTransform(scrollYProgress, [0.75, 1], [1, 0], {
            damping: 1,
            stiffness: 1000,
          })),
        }}>
      <Image
        src="/hero/hero-image.png"
        alt="Picture of the author"
        width={1206}
        height={1162}
        className="w-1000 aspect-[1206/1162]  left-650"
      />
      </motion.div>
      <div className="absolute top-35 left-800 w-800 h-800 bg-radial from-purple-900 to-50% to-[var--background] rounded-md z-0">
      </div>
    </>
    
  );
}
