"use client";
import { motion, useTransform, useSpring } from "motion/react";
import Image from "next/image";

interface BackgroundImageProps {
  scrollYProgress: MotionValue<number>;
}

export default function BackGroundImage({
  scrollYProgress,
}: BackgroundImageProps) {
  return (
    <motion.div
      className="absolute h-full w-full"
      style={{
        y: useSpring(
          useTransform(scrollYProgress, [0, 1], [0, 50], {
            damping: 100,
            stiffness: 20,
          })
        ),
        x: useSpring(
          useTransform(scrollYProgress, [0, 1], [0, 50], {
            damping: 100,
            stiffness: 20,
          })
        ),
        opacity: useSpring(useTransform(scrollYProgress, [0, 1], [1, 0], {
          damping: 100,
          stiffness: 20,
        })),
      }}
    >
      <Image
        className=" "
        src="/about/pc-background.png"
        alt=""
        layout="fill"
      />
    </motion.div>
  );
}
